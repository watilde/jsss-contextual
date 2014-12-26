module.exports = function () {
  var args = Array.prototype.slice.call(arguments);
  var contextualProxy = require('./proxy');
  return contextualProxy(args);
};

