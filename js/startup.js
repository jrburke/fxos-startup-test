window.performance.mark('startup.js');

(function() {
  var perf = window.performance;

  function finishStartup() {
    // Pull the template out of the DOM.
    var bodyTemplate = document.getElementById('bodyTemplate');
    bodyTemplate.parentNode.removeChild(bodyTemplate);

    // Clone the body content for real insertion. All custom elements should be
    // registered now.
    var bodyContent = document.importNode(bodyTemplate.content, true);

    // Display to user.
    document.body.appendChild(bodyContent);

    document.body.classList.remove('collapsed');
    // document.documentElement.style.display = '';

    perf.mark('fullyLoaded');
  }

  // Wait for four things to load, including this file.
  var startupCounter = 1;

  // Do not really care about the description, could be used for debugging.
  window.notifyStartup = function(description) {
    startupCounter += 1;
    if (startupCounter === 4) {
      finishStartup();
    }
  };

  // The other scripts could have been loaded before this one.
  if (typeof myHeaderLoaded !== 'undefined') {
    notifyStartup();
  }
  if (typeof myContentLoaded !== 'undefined') {
    notifyStartup();
  }
  if (typeof cardsMessageListLoaded !== 'undefined') {
    notifyStartup();
  }

}());
