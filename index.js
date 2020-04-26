'use strict';

const request = require('request-promise');
const validateIP = require('validate-ip-node');

const API_ENDPOINT = "https://www.iplocate.io/api/lookup/";

module.exports = function iplocate(ip_address, options, callback) {
  options = options || {};
  options.api_key = options.api_key || null;

  callback = callback || function() {};

  return new Promise((resolve, reject) => {
    // Check that our IP address is valid
    if(!validateIP(ip_address)) {
      reject('Invalid IP address');
      return callback('Invalid IP address');
    }

    // Add our API key header, if we have one
    let headers = {};
    if(typeof options.api_key === 'string') {
      headers["X-API-Key"] = options.api_key;
    }

    let endpoint = API_ENDPOINT + ip_address;

    return request.get({
      uri: endpoint,
      json: true,
      headers: headers
    }).then(function(results) {
      resolve(results);
      return callback(null, results);
    }).catch(function(e) {
      // Return either the server-provided error, or the default error from request
      let error = (e.response && e.response.body && e.response.body.error) ? e.response.body.error : e.message;

      reject(error);
      return callback(error);
    });
  });
} 
