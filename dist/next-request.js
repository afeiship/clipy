/*!
 * name: next-request
 * url: https://github.com/afeiship/next-request
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var request = require('request');

  // use native promise:
  request('requist-native-promise');

  var NxRequest = nx.declare('nx.Request', {
    statics: {
      request: function(inMethod, inUrl, inData, inOptions) {
        var METHOD = inMethod.toUpperCase();
        var dataKey = METHOD === 'GET' ? 'qs' : 'body';
        var options = inOptions || {};
        options[dataKey] = inData;
        return request(
          nx.mix(
            {
              uri: inUrl,
              method: inMethod
            },
            options
          )
        );
      },
      'get,delete,head,post,put,patch': function(inMethod) {
        var self = this;
        return function(inUrl, inData, inOptions) {
          return self.request(inMethod, inUrl, inData, inOptions);
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRequest;
  }
})();
