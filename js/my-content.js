window.performance.mark('my-content.js');

(function() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
    this.innerHTML = `
<div data-prop="scrollContainer" class="msg-list-scrollouter">
  <!-- exists so we can force a minimum height -->
  <div class="msg-list-scrollinner">
    <!-- The search textbox hides under the lip of the messages.
         As soon as any typing happens in it, we push the search
         controls card. -->
    <form role="search" data-prop="searchBar" class="msg-search-tease-bar">
      <p>
        <input placeholder="Search Mail" data-event="focus:onSearchButton" data-prop="searchTextTease" class="msg-search-text-tease" dir="auto" data-l10n-id="message-search-input" type="text">
      </p>
    </form>
    <div data-cached="cached" aria-label="Inbox" aria-multiselectable="true" role="listbox" class="email-ce" data-prop="msgVScroll" data-empty-l10n-id="messages-folder-empty"><div style="height: 1120px;" data-prop="vScrollContainer" class="msg-vscroll-container"><a data-id="0.1JnWX0jciv1" data-index="0" style="top: 0px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Vancouver Sun</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Informed Opinion</span>
    <span data-time="1439218861000" dir="auto" class="msg-message-date">7 hours ago</span>
    <span dir="auto" class="msg-message-snippet"> Trouble reading your Vancouver Sun newsletter? Please click here. &nbsp; IN THIS ISSUE: &gt; Daphne Bramham: Polygamy, the opera, comes... &gt; Opinion: The po</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JnWA7lxWkX" data-index="1" style="top: 80px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">daniel richardson</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">[jetpack] Looking for Technical Architect at Chicago, IL</span>
    <span data-time="1439217360000" dir="auto" class="msg-message-date">8 hours ago</span>
    <span dir="auto" class="msg-message-snippet"> Hi Friends Hope you are doing great Please find the JD below and revert back with suitable profile with 12 to 14 years of experience Job Title: Technical Archi</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JnVxIiNnxw" data-index="2" style="top: 160px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">daniel richardson</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">[jetpack] Looking for Solution Designer Node JS and Solution Architect Node JS at Saint Louis, MO</span>
    <span data-time="1439216388000" dir="auto" class="msg-message-date">8 hours ago</span>
    <span dir="auto" class="msg-message-snippet"> Hi Friends Hope you are doing great Please find the JD below Job Title: Solution Designer Node JS Location: Saint Louis, MO Duration: 6 Month Job Description: </span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JnNIUL0dLY" data-index="3" style="top: 240px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Twitter</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Follow ericpromislow, Alex Russell and I'm too old for this on Twitter!</span>
    <span data-time="1439180159000" dir="auto" class="msg-message-date">18 hours ago</span>
    <span dir="auto" class="msg-message-snippet"> &amp;nb</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JnIw46AEG3" data-index="4" style="top: 320px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Aljazeera Net</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Aljazeera Net Daily Newsletter</span>
    <span data-time="1439161782000" dir="auto" class="msg-message-date">23 hours ago</span>
    <span dir="auto" class="msg-message-snippet"> </span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JnIR5lDjdN" data-index="5" style="top: 400px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Popular in your network</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">The Economist tweeted: Republicans have seized a chance to frame Mr Obama as Iran's appeaser. Does the picture fit?</span>
    <span data-time="1439159752000" dir="auto" class="msg-message-date">yesterday</span>
    <span dir="auto" class="msg-message-snippet"> &amp;nb</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JnBwUnp3yV" data-index="6" style="top: 480px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Vancouver Sun</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Informed Opinion</span>
    <span data-time="1439132449000" dir="auto" class="msg-message-date">yesterday</span>
    <span dir="auto" class="msg-message-snippet"> Trouble reading your Vancouver Sun newsletter? Please click here. &nbsp; IN THIS ISSUE: &gt; Editorial: Let’s fix spill response gaps... &gt; Opinion: The poor</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1Jn93PX8tCh" data-index="7" style="top: 560px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Quora Digest</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">What do Silicon Valley company CEOs do on the weekends? - Quora</span>
    <span data-time="1439120451000" dir="auto" class="msg-message-date">yesterday</span>
    <span dir="auto" class="msg-message-snippet"> Answer: I'm a little nervous about posting this answer.​ As a first-time CEO.​.​.​</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1Jn2m}8SGWA" data-index="8" style="top: 640px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Facebook</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Do you know Leanne Prain, Louise Caumartin and 8 others?</span>
    <span data-time="1439094078000" dir="auto" class="msg-message-date">yesterday</span>
    <span dir="auto" class="msg-message-snippet">&nbsp; Add the people you know to see their photos and updates. Leanne Prain Writer at Leanne Prain Roland Tanglao is a mutual friend. Add Friend Louise Caumart</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JmtKR}GD4T" data-index="9" style="top: 720px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Vancouver Sun</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Informed Opinion</span>
    <span data-time="1439046070000" dir="auto" class="msg-message-date">2 days ago</span>
    <span dir="auto" class="msg-message-snippet"> Trouble reading your Vancouver Sun newsletter? Please click here. &nbsp; IN THIS ISSUE: &gt; Editorial: Let’s fix spill response gaps... &gt; Opinion: The poor</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JmhZEaOd}C" data-index="10" style="top: 800px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Popular in your network</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">John Oliver tweeted: All Hail To The King...</span>
    <span data-time="1438996708000" dir="auto" class="msg-message-date">2 days ago</span>
    <span dir="auto" class="msg-message-snippet"> &amp;nb</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JmfkSwTvuQ" data-index="11" style="top: 880px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Aljazeera Net</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Aljazeera Net Daily Newsletter</span>
    <span data-time="1438989054000" dir="auto" class="msg-message-date">2 days ago</span>
    <span dir="auto" class="msg-message-snippet"> </span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a><a data-id="0.1JmYj{FOUxq" data-index="12" style="top: 960px;" class="msg-message-item vscroll-node unread" role="option" tabindex="0">
  <label class="pack-checkbox negative" aria-hidden="true">
    <input type="checkbox"><span></span>
  </label>
  <div class="msg-message-details-section">
    <span class="msg-message-author-count">
      <span dir="auto" class="msg-message-author">Vancouver Sun</span>
      <span data-l10n-args="{&quot;n&quot;:1}" data-l10n-id="message-header-conv-count" dir="auto" class="msg-message-count">(1)</span>
    </span>
    <span dir="auto" class="msg-message-subject">Informed Opinion</span>
    <span data-time="1438959663000" dir="auto" class="msg-message-date">3 days ago</span>
    <span dir="auto" class="msg-message-snippet"> Trouble reading your Vancouver Sun newsletter? Please click here. &nbsp; IN THIS ISSUE: &gt; Editorial: Fentanyl puts drug users at risk... &gt; Opinion: Circu</span>
  </div>
  <div class="msg-message-syncing-section"></div>
  <div aria-label="Unread" class="msg-message-unread-section" data-l10n-id="message-header-unread"></div>
  <div class="msg-message-icons-section">
    <span aria-label="Has star" class="msg-message-star" data-l10n-id="message-header-starred"></span>
    <span aria-label="Has attachments" class="msg-message-attachments" data-l10n-id="message-header-attachments"></span>
  </div><div class="msg-message-avatar-section" aria-hidden="true">
  </div></a></div>
<!-- maintain vertical space for the syncing/sync more div's
     regardless of their displayed status so we don't scroll them
     out of the way -->
<div class="msg-messages-sync-container">
  <p aria-valuetext="Loading Messages" data-prop="syncingNode" class="msg-messages-syncing collapsed" role="progressbar" data-l10n-id="messages-syncing-progressbar">
    <span data-l10n-id="messages-syncing">Loading Messages</span>
  </p>
  <p data-prop="syncMoreNode" data-event="click:onGetMoreMessages" class="msg-messages-sync-more" role="button">
    <span data-l10n-id="messages-load-more">Load More Messages</span>
  </p>
</div>
<div data-prop="messageEmptyContainer" class="msg-list-empty-container collapsed">
  <p data-prop="messageEmptyText" class="msg-list-empty-message-text" data-l10n-id="messages-folder-empty">No mail in this Folder</p>
</div></div>
  </div>
</div>
    `;
  };

  document.registerElement('my-content', {
    prototype: proto
  });
}());

var myContentLoaded = true;
if (typeof notifyStartup === 'function') {
  notifyStartup('my-content');
}
