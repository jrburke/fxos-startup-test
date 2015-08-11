window.performance.mark('my-header.js');

(function() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
    this.innerHTML = `
    <section data-prop="normalHeader"
             class="msg-list-header"
             data-statuscolor="default"
             role="region">
      <header>
        <a href="#" class="msg-folder-list-btn" data-event="click:onShowFolders"
           aria-expanded="false" aria-controls="cards-folder-picker"
           role="button" data-l10n-id="message-list-menu">
          <span class="icon icon-menu"></span>
        </a>
        <menu data-prop="headerMenuNode" type="toolbar" class="anim-opacity">
          <a href="#" class="msg-compose-btn" data-event="click:onCompose"
             data-l10n-id="message-list-compose">
            <span class="icon icon-compose"></span>
          </a>
        </menu>
        <h1 data-prop="folderLabel"
            class="msg-list-header-folder-label header-label">
          <span data-prop="folderNameNode"
                dir="auto"
                class="msg-list-header-folder-name">Start</span>
          <span data-prop="folderUnread"
                class="msg-list-header-folder-unread">42</span>
        </h1>
      </header>
    </section>
    `;
  };

  document.registerElement('my-header', {
    prototype: proto
  });
}());

var myHeaderLoaded = true;
if (typeof notifyStartup === 'function') {
  notifyStartup('my-header');
}
