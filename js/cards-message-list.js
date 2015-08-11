window.performance.mark('cards-message-list.js');

(function() {
  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
    this.innerHTML = `
    <my-header></my-header>
    <my-content></my-content>
    `;
  };

  document.registerElement('cards-message-list', {
    prototype: proto
  });
}());

var cardsMessageListLoaded = true;
if (typeof notifyStartup === 'function') {
  notifyStartup('cards-message-list');
}
