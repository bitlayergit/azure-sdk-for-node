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
 * ID and Key for Migration Project.
 *
 * @extends models['BaseResource']
 */
class ProjectKey extends models['BaseResource'] {
  /**
   * Create a ProjectKey.
   * @member {string} [workspaceId] ID of Migration Project.
   * @member {string} [workspaceKey] Key of Migration Project.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProjectKey
   *
   * @returns {object} metadata of ProjectKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProjectKey',
      type: {
        name: 'Composite',
        className: 'ProjectKey',
        modelProperties: {
          workspaceId: {
            required: false,
            readOnly: true,
            serializedName: 'workspaceId',
            type: {
              name: 'String'
            }
          },
          workspaceKey: {
            required: false,
            readOnly: true,
            serializedName: 'workspaceKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProjectKey;
