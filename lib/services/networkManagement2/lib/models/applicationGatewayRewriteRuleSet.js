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
 * Rewrite rule set of an application gateway.
 *
 * @extends models['SubResource']
 */
class ApplicationGatewayRewriteRuleSet extends models['SubResource'] {
  /**
   * Create a ApplicationGatewayRewriteRuleSet.
   * @property {array} [rewriteRules] Rewrite rules in the rewrite rule set.
   * @property {string} [provisioningState] Provisioning state of the rewrite
   * rule set resource. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @property {string} [name] Name of the rewrite rule set that is unique
   * within an Application Gateway.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationGatewayRewriteRuleSet
   *
   * @returns {object} metadata of ApplicationGatewayRewriteRuleSet
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayRewriteRuleSet',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayRewriteRuleSet',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          rewriteRules: {
            required: false,
            serializedName: 'properties.rewriteRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationGatewayRewriteRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationGatewayRewriteRule'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayRewriteRuleSet;
