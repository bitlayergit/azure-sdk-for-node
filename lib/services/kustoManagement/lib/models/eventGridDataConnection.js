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
 * Class representing an Event Grid data connection.
 *
 * @extends models['DataConnection']
 */
class EventGridDataConnection extends models['DataConnection'] {
  /**
   * Create a EventGridDataConnection.
   * @property {string} storageAccountResourceId The resource ID of the storage
   * account where the data resides.
   * @property {string} eventHubResourceId The resource ID where the event grid
   * is configured to send events.
   * @property {string} consumerGroup The event hub consumer group.
   * @property {string} tableName The table where the data should be ingested.
   * Optionally the table information can be added to each message.
   * @property {string} [mappingRuleName] The mapping rule to be used to ingest
   * the data. Optionally the mapping information can be added to each message.
   * @property {string} dataFormat The data format of the message. Optionally
   * the data format can be added to each message. Possible values include:
   * 'MULTIJSON', 'JSON', 'CSV', 'TSV', 'SCSV', 'SOHSV', 'PSV', 'TXT', 'RAW',
   * 'SINGLEJSON', 'AVRO'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EventGridDataConnection
   *
   * @returns {object} metadata of EventGridDataConnection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventGrid',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'BaseResource',
        className: 'EventGridDataConnection',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          storageAccountResourceId: {
            required: true,
            serializedName: 'properties.storageAccountResourceId',
            type: {
              name: 'String'
            }
          },
          eventHubResourceId: {
            required: true,
            serializedName: 'properties.eventHubResourceId',
            type: {
              name: 'String'
            }
          },
          consumerGroup: {
            required: true,
            serializedName: 'properties.consumerGroup',
            type: {
              name: 'String'
            }
          },
          tableName: {
            required: true,
            serializedName: 'properties.tableName',
            type: {
              name: 'String'
            }
          },
          mappingRuleName: {
            required: false,
            serializedName: 'properties.mappingRuleName',
            type: {
              name: 'String'
            }
          },
          dataFormat: {
            required: true,
            serializedName: 'properties.dataFormat',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventGridDataConnection;