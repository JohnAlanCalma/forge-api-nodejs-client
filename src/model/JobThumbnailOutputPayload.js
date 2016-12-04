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

  var ApiClient = require('../ApiClient'),
      JobThumbnailOutputPayloadAdvanced = require('./JobThumbnailOutputPayloadAdvanced');



  /**
   * The JobThumbnailOutputPayload model module.
   * @module model/JobThumbnailOutputPayload
   * @version 0.2.4
   */

   /**
    * Constructs a <code>JobThumbnailOutputPayload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobThumbnailOutputPayload} obj Optional instance to populate.
    * @return {module:model/JobThumbnailOutputPayload} The populated <code>JobThumbnailOutputPayload</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('advanced')) {
        obj['advanced'] = JobThumbnailOutputPayloadAdvanced.constructFromObject(data['advanced']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobThumbnailOutputPayload</code>.
   * @alias module:model/JobThumbnailOutputPayload
   * @class
   * @param type {module:model/JobThumbnailOutputPayload.TypeEnum} The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobThumbnailOutputPayload} obj Optional instance to populate.
   */
  var exports = function(type, theData, obj) {
    var _this = this;

    _this['type'] = type;


    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobThumbnailOutputPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobThumbnailOutputPayload} obj Optional instance to populate.
   * @return {module:model/JobThumbnailOutputPayload} The populated <code>JobThumbnailOutputPayload</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The requested output types. Possible values include `svf`, `thumbnai`, `stl`, `step`, `iges`, or `obj`. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint.
   * @member {module:model/JobThumbnailOutputPayload.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/JobThumbnailOutputPayloadAdvanced} advanced
   */
  exports.prototype['advanced'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "svf"
     * @const
     */
    "svf": "svf",
    /**
     * value: "thumbnail"
     * @const
     */
    "thumbnail": "thumbnail",
    /**
     * value: "stl"
     * @const
     */
    "stl": "stl",
    /**
     * value: "step"
     * @const
     */
    "step": "step",
    /**
     * value: "iges"
     * @const
     */
    "iges": "iges",
    /**
     * value: "obj"
     * @const
     */
    "obj": "obj"  };


  return exports;
}());


