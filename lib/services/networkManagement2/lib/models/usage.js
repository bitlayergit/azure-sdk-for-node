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

/**
 * Describes network resource usage.
 *
 */
class Usage {
  /**
   * Create a Usage.
   * @property {string} [id] Resource identifier.
   * @property {number} currentValue The current value of the usage.
   * @property {number} limit The limit of usage.
   * @property {object} name The name of the type of usage.
   * @property {string} [name.value] A string describing the resource name.
   * @property {string} [name.localizedValue] A localized string describing the
   * resource name.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Usage
   *
   * @returns {object} metadata of Usage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Usage',
      type: {
        name: 'Composite',
        className: 'Usage',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          unit: {
            required: true,
            isConstant: true,
            serializedName: 'unit',
            defaultValue: 'Count',
            type: {
              name: 'String'
            }
          },
          currentValue: {
            required: true,
            serializedName: 'currentValue',
            type: {
              name: 'Number'
            }
          },
          limit: {
            required: true,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'UsageName'
            }
          }
        }
      }
    };
  }
}

module.exports = Usage;
