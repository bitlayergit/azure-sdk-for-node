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
 * @class
 * Initializes a new instance of the ClassicAdministratorListResult class.
 * @constructor
 * ClassicAdministrator list result information.
 *
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 *
 */
class ClassicAdministratorListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ClassicAdministratorListResult
   *
   * @returns {object} metadata of ClassicAdministratorListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClassicAdministratorListResult',
      type: {
        name: 'Composite',
        className: 'ClassicAdministratorListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ClassicAdministratorElementType',
                  type: {
                    name: 'Composite',
                    className: 'ClassicAdministrator'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ClassicAdministratorListResult;