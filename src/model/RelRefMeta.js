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
   * The RelRefMeta model module.
   * @module model/RelRefMeta
   * @version 0.2.4
   */

   /**
    * Constructs a <code>RelRefMeta</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RelRefMeta} obj Optional instance to populate.
    * @return {module:model/RelRefMeta} The populated <code>RelRefMeta</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('refType')) {
        obj['refType'] = ApiClient.convertToType(data['refType'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('fromId')) {
        obj['fromId'] = ApiClient.convertToType(data['fromId'], 'String');
      }
      if (data.hasOwnProperty('fromType')) {
        obj['fromType'] = ApiClient.convertToType(data['fromType'], 'String');
      }
      if (data.hasOwnProperty('toId')) {
        obj['toId'] = ApiClient.convertToType(data['toId'], 'String');
      }
      if (data.hasOwnProperty('toType')) {
        obj['toType'] = ApiClient.convertToType(data['toType'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = BaseAttributesExtensionObject.constructFromObject(data['extension']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>RelRefMeta</code>.
   * @alias module:model/RelRefMeta
   * @class
   * @param refType {module:model/RelRefMeta.RefTypeEnum} 
   * @param direction {module:model/RelRefMeta.DirectionEnum} describes the direction of the reference relative to the resource the refs are queried for
   * @param fromId {String} 
   * @param fromType {module:model/RelRefMeta.FromTypeEnum} 
   * @param toId {String} 
   * @param toType {module:model/RelRefMeta.ToTypeEnum} 
   * @param extension {module:model/BaseAttributesExtensionObject} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelRefMeta} obj Optional instance to populate.
   */
  var exports = function(refType, direction, fromId, fromType, toId, toType, extension, theData, obj) {
    var _this = this;

    _this['refType'] = refType;
    _this['direction'] = direction;
    _this['fromId'] = fromId;
    _this['fromType'] = fromType;
    _this['toId'] = toId;
    _this['toType'] = toType;
    _this['extension'] = extension;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>RelRefMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelRefMeta} obj Optional instance to populate.
   * @return {module:model/RelRefMeta} The populated <code>RelRefMeta</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/RelRefMeta.RefTypeEnum} refType
   */
  exports.prototype['refType'] = undefined;
  /**
   * describes the direction of the reference relative to the resource the refs are queried for
   * @member {module:model/RelRefMeta.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {String} fromId
   */
  exports.prototype['fromId'] = undefined;
  /**
   * @member {module:model/RelRefMeta.FromTypeEnum} fromType
   */
  exports.prototype['fromType'] = undefined;
  /**
   * @member {String} toId
   */
  exports.prototype['toId'] = undefined;
  /**
   * @member {module:model/RelRefMeta.ToTypeEnum} toType
   */
  exports.prototype['toType'] = undefined;
  /**
   * @member {module:model/BaseAttributesExtensionObject} extension
   */
  exports.prototype['extension'] = undefined;


  /**
   * Allowed values for the <code>refType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RefTypeEnum = {
    /**
     * value: "derived"
     * @const
     */
    "derived": "derived",
    /**
     * value: "dependencies"
     * @const
     */
    "dependencies": "dependencies",
    /**
     * value: "auxiliary"
     * @const
     */
    "auxiliary": "auxiliary",
    /**
     * value: "xrefs"
     * @const
     */
    "xrefs": "xrefs"  };

  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "from"
     * @const
     */
    "from": "from",
    /**
     * value: "to"
     * @const
     */
    "to": "to"  };

  /**
   * Allowed values for the <code>fromType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FromTypeEnum = {
    /**
     * value: "folders"
     * @const
     */
    "folders": "folders",
    /**
     * value: "items"
     * @const
     */
    "items": "items",
    /**
     * value: "versions"
     * @const
     */
    "versions": "versions"  };

  /**
   * Allowed values for the <code>toType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ToTypeEnum = {
    /**
     * value: "folders"
     * @const
     */
    "folders": "folders",
    /**
     * value: "items"
     * @const
     */
    "items": "items",
    /**
     * value: "versions"
     * @const
     */
    "versions": "versions"  };


  return exports;
}());


