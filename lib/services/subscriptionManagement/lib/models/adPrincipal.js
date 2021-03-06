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
 * Active Directory Principal for subscription creation delegated permission
 *
 */
class AdPrincipal {
  /**
   * Create a AdPrincipal.
   * @member {string} objectId Object id of the Principal
   */
  constructor() {
  }

  /**
   * Defines the metadata of AdPrincipal
   *
   * @returns {object} metadata of AdPrincipal
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AdPrincipal',
      type: {
        name: 'Composite',
        className: 'AdPrincipal',
        modelProperties: {
          objectId: {
            required: true,
            serializedName: 'objectId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AdPrincipal;
