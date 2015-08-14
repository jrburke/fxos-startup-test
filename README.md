# fxos-startup-test

Testing how layouts and paints before app is ready might affect startup. The goal is to avoid as much browser work related to layout, rendering and painting until JS for the app has actually set up the view. Any work done before that is likely just wasted time.

This app simulates a certain style of app construction.

* Custom elements are used to construct the view. There is `<cards-message-list>` custom element referenced in the index.html, and that custom element uses two other custom elements inside itself, `<my-header>` and `<my-content>`. For simplicitly, all the custom elements just innerHTML their internal contents.
* async script tags loaded by a JS module loader. A script loader is not used in this example, just `<script async>` tags that would be added by a loader. There are three scripts for the three custom elements and a startup.js that does the work to create the final view.
* A `<template>` tag is used in the `<body>`, to allow a view to initially be coded in the HTML document, but not activated or used until the JS that backs the custom elements have loaded. startup.js clones the template and adds it to the `<body>` once the scripts have loaded. Once that happens, the view is visible and considered complete.

No IndexedDB or worker work is done in this example. The long term goal is that a service worker cache would provide this document so that the initial view, once the JS for the view was loaded, could be rendered without needing DB work or data-focused workers.

To reflect a real world-ish size of a view and size of CSS styles in play, the Gaia email app's built styles are used as well as a copy of the email app's startup message list view. It is a bit incomplete (missing the bottom buttons) but should be a decent test of a view.

This app is a "certified" app, so it bypasses some checks b2g would normally do for a non-certified app. Hopefully this should not matter for the purposes of this test, and should help reduce some noise of those b2g checks from the the profiles, so that the up front costs of the layout work are more visible.

The `<body>` has a `background-color: transparent;` set on it so that hopefully the startup animation with the app icon is visible and there is no white flash painted before seeing the final view. The view's div has a white background color set on it.

The profile captures were done via `./profile.sh start -p b2g -t Compositor && ./profile.sh start -p [preallocated app pid]`.

## Variations

Some variations were tried to see if they affected the paint work. The code committed to this repo is in the "regular" mode to start, you can modify it to meet the other variations by following the notes in the variations.

### Regular

[Profile](http://people.mozilla.org/~bgirard/cleopatra/#report=4438bd312f8c0bf0c7cac79760a254496b82b8c1): This one does not do any `display: none` work, just uses the `<template>` tag to avoid any visible `<body>` content during startup.

#### Profile notes

208030ms is the firstLoadURI marker, so going from that marker as the start point. Dropping the **208** prefix for the numbers to help make it easier to see the relative differences.

* **Start**: 030 - firstLoadURI
* **End**: 434 - The JS in startup.js that sets up the view. Layouts after this point are expected, not part of this test. The goal is to find savings between firstLoadURI and the startup.js point.

* 034-045 - 11ms: getAppInfo @ AppsService.js:110
* 058-223 - 165ms: epoll_wait on Content row, the GPU row has around notable 8 notable Composite entries, each around 4ms, some very small (less than 1ms) Composite entries too. Hypothesis: related to the app icon zoom in effect when tapping on an app icon from the home screen.
* 239-284 - 45ms: Some script work relatied to user customizations and CSP:
    * this.UserCustomizations.observe() @ UserCustomizations.jsm:297
    * getCSPBYLocalId() and getAppBYLocalId(), both in AppsService.js
* 297-362 - 65ms: nsInputStreamPump:OnStateStop: some sort of IO?
* 366-389 - 23ms: RunScript related to BrowserElementChild.prototype._metaChangedHandler @ BrowserElementChildPreload.js:562.
* 389-433 - some IO work/evaluation of cards-message-list.js, a script in the page, and 7ms spent in nsStyleSet:FileRules.
* 434: Start of startup.js view work.

A quicker evaluation of the "display none body" and "display none html" profiles show they do not perform any faster than the "regular" one, and have a similar shape between the firstLoadURI and the startup.js work.

Looking at that profile does not seem to indicate sizable wait time related to layouts or renders before the app JS constructs the view.

There does not seem to be a need for extra APIs in the browser for controlling layouts or paints using this approach:

* Set the background-color for the body to be transparent.
* The body content consists of a `<template>` element with the initial content. It can include custom elements, but they are inert given the `<template>` usage.
* Async load the scripts that will provide the implementation of the custom elements.
* Once all the elements have been registered, document.importNode the body template's content, and append to the body.

At this point the content becomes visible, and layouts and reflows occur. It might be possible to optimize some of that layout work, although this test is fairly straightforward: some innerHTMLs done in some custom element createdCallback steps, and no other dynamic JS work done after that.

### display none body

[Profile](http://people.mozilla.org/~bgirard/cleopatra/#report=5567cea572dc770d89f543f1066e3673f075dd9d): This variation sets a `class="collapsed"` on the `<body>` tag, and then in startup.js removes that "collapsed" class once the real content is in the body. The "collapsed" CSS class has just one rule in it: `display: none !important;`.

Use the `<body role="application" class="collapsed">` tag variation in index.html and uncomment the `document.body.classList.remove('collapsed');` line in startup.js to try this variation.

### display none html

[Profile](http://people.mozilla.org/~bgirard/cleopatra/#report=6083bed225b1b551c8d5f61bff9f19f923db0fda): This variation sets `style="display: none"` on the `<html>` tag and then in in startup.js removes that style once the real content is in the body.

Use the `<html lang="en-US" dir="ltr" style="display: none">` tag variation in index.html and uncomment the `document.documentElement.style.display = '';` line in startup.js to try this variation.

