/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetInstanceView class.
 * @constructor
 * The instance view of a virtual machine scale set.
 * @member {object} [virtualMachine] Gets the instance view status summary for
 * the virtual machine scale set.
 * 
 * @member {array} [virtualMachine.statusesSummary] Gets the extensions
 * information.
 * 
 * @member {array} [extensions] Gets the extensions information.
 * 
 * @member {array} [statuses] Gets or sets the resource status information.
 * 
 */
function VirtualMachineScaleSetInstanceView() {
}

/**
 * Defines the metadata of VirtualMachineScaleSetInstanceView
 *
 * @returns {object} metadata of VirtualMachineScaleSetInstanceView
 *
 */
VirtualMachineScaleSetInstanceView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetInstanceView',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetInstanceView',
      modelProperties: {
        virtualMachine: {
          required: false,
          serializedName: 'virtualMachine',
          type: {
            name: 'Composite',
            className: 'VirtualMachineScaleSetInstanceViewStatusesSummary'
          }
        },
        extensions: {
          required: false,
          serializedName: 'extensions',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VirtualMachineScaleSetVMExtensionsSummaryElementType',
                type: {
                  name: 'Composite',
                  className: 'VirtualMachineScaleSetVMExtensionsSummary'
                }
            }
          }
        },
        statuses: {
          required: false,
          serializedName: 'statuses',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'InstanceViewStatusElementType',
                type: {
                  name: 'Composite',
                  className: 'InstanceViewStatus'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineScaleSetInstanceView;