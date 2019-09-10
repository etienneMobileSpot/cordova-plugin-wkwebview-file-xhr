'use strict';

(function ()
{
  if(!(!!(window.webkit && window.webkit.messageHandlers)))
    return;
  var _fetch = window.fetch;
  window.fetch = undefined;
})();
