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
 * Paged Recipient User list representation.
 *
 */
class RecipientEmailCollection {
  /**
   * Create a RecipientEmailCollection.
   * @property {array} [value] Page values.
   * @property {string} [nextLink] Next page link if any.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecipientEmailCollection
   *
   * @returns {object} metadata of RecipientEmailCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecipientEmailCollection',
      type: {
        name: 'Composite',
        className: 'RecipientEmailCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RecipientEmailContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'RecipientEmailContract'
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

module.exports = RecipientEmailCollection;
