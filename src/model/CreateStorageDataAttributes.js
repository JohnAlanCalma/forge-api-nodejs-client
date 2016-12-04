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
      BaseAttributesExtensionObject = require('./BaseAttributesExtensionObject');



  /**
   * The CreateStorageDataAttributes model module.
   * @module model/CreateStorageDataAttributes
   * @version 0.2.4
   */

   /**
    * Constructs a <code>CreateStorageDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateStorageDataAttributes} obj Optional instance to populate.
    * @return {module:model/CreateStorageDataAttributes} The populated <code>CreateStorageDataAttributes</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = BaseAttributesExtensionObject.constructFromObject(data['extension']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>CreateStorageDataAttributes</code>.
   * @alias module:model/CreateStorageDataAttributes
   * @class
   * @param name {String} 
   * @param extension {module:model/BaseAttributesExtensionObject} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateStorageDataAttributes} obj Optional instance to populate.
   */
  var exports = function(name, extension, theData, obj) {
    var _this = this;

    _this['name'] = name;
    _this['extension'] = extension;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>CreateStorageDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateStorageDataAttributes} obj Optional instance to populate.
   * @return {module:model/CreateStorageDataAttributes} The populated <code>CreateStorageDataAttributes</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/BaseAttributesExtensionObject} extension
   */
  exports.prototype['extension'] = undefined;



  return exports;
}());


