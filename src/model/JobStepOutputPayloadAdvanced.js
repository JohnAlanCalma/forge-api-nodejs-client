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

  var ApiClient = require('../ApiClient');



  /**
   * The JobStepOutputPayloadAdvanced model module.
   * @module model/JobStepOutputPayloadAdvanced
   * @version 0.2.4
   */

   /**
    * Constructs a <code>JobStepOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobStepOutputPayloadAdvanced} obj Optional instance to populate.
    * @return {module:model/JobStepOutputPayloadAdvanced} The populated <code>JobStepOutputPayloadAdvanced</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('applicationProtocol')) {
        obj['applicationProtocol'] = ApiClient.convertToType(data['applicationProtocol'], 'String');
      }
      if (data.hasOwnProperty('tolerance')) {
        obj['tolerance'] = ApiClient.convertToType(data['tolerance'], 'Number');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobStepOutputPayloadAdvanced</code>.
   * Advanced options for &#x60;step&#x60; type.
   * @alias module:model/JobStepOutputPayloadAdvanced
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStepOutputPayloadAdvanced} obj Optional instance to populate.
   */
  var exports = function(theData, obj) {
    var _this = this;




    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobStepOutputPayloadAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStepOutputPayloadAdvanced} obj Optional instance to populate.
   * @return {module:model/JobStepOutputPayloadAdvanced} The populated <code>JobStepOutputPayloadAdvanced</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * A STEP file can be generated with the following Application Protocols: `203` for configuration controlled design, `214` for core data for automotive mechanical design processes, `242` for managed model based 3D engineering. By default, `214` will be exported. 
   * @member {module:model/JobStepOutputPayloadAdvanced.ApplicationProtocolEnum} applicationProtocol
   * @default '214'
   */
  exports.prototype['applicationProtocol'] = '214';
  /**
   * Possible values are between `0` and `1`. By default it is set at 0.001.
   * @member {Number} tolerance
   * @default 0.001
   */
  exports.prototype['tolerance'] = 0.001;


  /**
   * Allowed values for the <code>applicationProtocol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationProtocolEnum = {
    /**
     * value: "203"
     * @const
     */
    "203": "203",
    /**
     * value: "214"
     * @const
     */
    "214": "214",
    /**
     * value: "242"
     * @const
     */
    "242": "242"  };


  return exports;
}());


