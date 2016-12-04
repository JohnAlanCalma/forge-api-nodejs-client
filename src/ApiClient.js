/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var request = require('request');

  /**
   * @module ApiClient
   * @version 0.2.4
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var exports = function() {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://developer.api.autodesk.com
     */
    this.basePath = 'https://developer.api.autodesk.com'.replace(/\/+$/, '');
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    this.basePath = 'https://developer.api.autodesk.com';
  };

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  exports.prototype.isFileParam = function(param) {

    return param instanceof require('fs').ReadStream || (typeof Buffer === 'function' && param instanceof Buffer);
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        // return the array directly
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  /**
    * Applies authentication header to the request.
    * @param {Object} requestParams - The requestParams object created by a <code>request()</code> call.
    * @param {Object} headers - The headers that passed to this method
    * @param {Object} oauth2client - OAuth2 client that has a credentials object
    * @param {Object} credentials - The credentials object
    */
   exports.prototype.applyAuthToRequest = function(requestParams, headers, oauth2client, credentials) {

     var _this = this;
     function setAuthHeader(credentials){
       if (credentials.access_token) {
         headers['Authorization'] = 'Bearer ' + credentials.access_token;
       }
     }

     return new Promise(function(resolve, reject) {
       //if the request doesn't require authentication, just resolve the promise
       if (!credentials || (credentials && !credentials.access_token)) {
         resolve();
       }

       // let's see if the token is already expired?
       // be careful access tokens are validated once teh query was received by the server, not when emitted
       // for this reason, we need to aknowledge the time to upload payload/file/etc... (300 == 5min)
       if (oauth2client.autoRefresh && new Date(credentials.expires_at - 300).getTime() <= Date.now()) {

         // set the correct promiseObj, for 2 or 3 legged token
         var isCredentialsTypeTwoLegged = true;

         if (credentials.refresh_token){
           isCredentialsTypeTwoLegged = false;
         }

         var getCredentialsPromise = isCredentialsTypeTwoLegged
             ? oauth2client.authenticate() // 2-legged: create a new credentials object
             : oauth2client.refreshToken(credentials); // 3-legged: use refresh


         getCredentialsPromise.then(function(newCredentials){
           _this.debug('credentials were refreshed, new credentials:', newCredentials);

           // For a 2-legged token just update the credentials object
           if (isCredentialsTypeTwoLegged){
             oauth2client.setCredentials(newCredentials);
           }
           setAuthHeader(newCredentials);
           resolve();
         }, function(err){
           reject(err);
         });
       } else {
         setAuthHeader(credentials);
         _this.debug('set current credentials to header', credentials);
         resolve();
       }
     });
   };

  /**
   * Enable working in debug mode
   * To activate, simple set ForgeSdk.setDebug(true);
   */
  exports.prototype.debug = function debug(){
    if (this.isDebugMode){
      var args = Array.prototype.slice.call(arguments);
      args.map(function(arg){
        if (typeof arg === 'string'){
          console.log(arg + ': ');
        } else {
          console.log(arg);
        }
      })
    }
  };

  /**
   * Invokes the REST service using the supplied settings and parameters.
   * @param {String} path The base URL to invoke.
   * @param {String} httpMethod The HTTP method to use.
   * @param {Object.<String, String>} pathParams A map of path parameters and their values.
   * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
   * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
   * @param {Object.<String, Object>} formParams A map of form parameters and their values.
   * @param {Object} bodyParam The value to pass as the request body.
   * @param {Array.<String>} contentTypes An array of request MIME types.
   * @param {Array.<String>} accepts An array of acceptable response MIME types.
   * @param {(String|Array|Object|Function)} returnType The required type to return; can be a string for simple types or the
   *    constructor for a complex type.
   * @param {Object} oauth2client oauth2client for the call
   * @param {Object} credentials credentials for the call
   * @returns {Object} A Promise object.
   */
  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
      returnType, oauth2client, credentials) {

    var _this = this;
    var requestParams = {};
    requestParams.uri = this.buildUrl(path, pathParams);
    requestParams.method = httpMethod;
    var headers = {};
    requestParams.qs = this.normalizeParams(queryParams);
    requestParams.timeout = this.timeout;

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      headers['Content-Type'] = contentType;
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      requestParams.form(this.normalizeParams(formParams));
    } else if (contentType == 'multipart/form-data') {
      requestParams.formData = this.normalizeParams(formParams);
    } else if (bodyParam) {
      requestParams.body = bodyParam;
      if (contentType == 'application/json'){
        requestParams.json = true;
      }
    }

    if (accepts.length > 0) {
      headers['Accept'] = accepts.join(',');
      for (var i = 0; i < accepts.length; i++) {
        if (accepts [i] === 'application/octet-stream')
          requestParams.encoding = null;
      }
    }
    if (headerParams['Accept-Encoding'] == 'gzip, deflate')
      requestParams.encoding = null;
    _this.debug('request params were', requestParams);

    return new Promise(function (resolve, reject) {
      _this.applyAuthToRequest(requestParams, headers, oauth2client, credentials).then(function() {

        // headerParams optional overrides
        requestParams.headers = Object.assign(headers, headerParams);

        // Call API endpoint
        request(requestParams,
            function (error, response, body) {
              if (error) {
                reject(error);
              } else {
                var resp;
                try {
                  resp = JSON.parse(body)
                }
                catch(e) {
                  resp = body
                }

                if (response.statusCode >= 400) {
                  _this.debug('error response', {
                    statusCode: response.statusCode,
                    statusMessage: response.statusMessage
                  });
                  reject({statusCode: response.statusCode, statusMessage: response.statusMessage});
                } else {
                  resolve({statusCode: response.statusCode, headers: response.headers, body: resp});
                }
              }
            });
      }, function(err){
        throw new Error(err.toString);
      });
    });
  };

  /**
   * The default API client implementation.
   * @type {module:ApiClient}
   */
  exports.instance = new exports();

  return exports;
}());
