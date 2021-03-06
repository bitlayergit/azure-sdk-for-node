/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Output of virtual machine capture operation.
 *
 * @extends models['SubResource']
 */
class VirtualMachineCaptureResult extends models['SubResource'] {
  /**
   * Create a VirtualMachineCaptureResult.
   * @property {string} [schema] the schema of the captured virtual machine
   * @property {string} [contentVersion] the version of the content
   * @property {object} [parameters] parameters of the captured virtual machine
   * @property {array} [resources] a list of resource items of the captured
   * virtual machine
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualMachineCaptureResult
   *
   * @returns {object} metadata of VirtualMachineCaptureResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineCaptureResult',
      type: {
        name: 'Composite',
        className: 'VirtualMachineCaptureResult',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          schema: {
            required: false,
            readOnly: true,
            serializedName: '$schema',
            type: {
              name: 'String'
            }
          },
          contentVersion: {
            required: false,
            readOnly: true,
            serializedName: 'contentVersion',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            readOnly: true,
            serializedName: 'parameters',
            type: {
              name: 'Object'
            }
          },
          resources: {
            required: false,
            readOnly: true,
            serializedName: 'resources',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineCaptureResult;
