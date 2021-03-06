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
 * Class to specify DRM configurations of CommonEncryptionCenc scheme in
 * Streaming Policy
 *
 */
class CencDrmConfiguration {
  /**
   * Create a CencDrmConfiguration.
   * @property {object} [playReady] PlayReady configurations
   * @property {string} [playReady.customLicenseAcquisitionUrlTemplate]
   * Template for the URL of the custom service delivering licenses to end user
   * players.  Not required when using Azure Media Services for issuing
   * licenses.  The template supports replaceable tokens that the service will
   * update at runtime with the value specific to the request.  The currently
   * supported token values are {AlternativeMediaId}, which is replaced with
   * the value of StreamingLocatorId.AlternativeMediaId, and {ContentKeyId},
   * which is replaced with the value of identifier of the key being requested.
   * @property {string} [playReady.playReadyCustomAttributes] Custom attributes
   * for PlayReady
   * @property {object} [widevine] Widevine configurations
   * @property {string} [widevine.customLicenseAcquisitionUrlTemplate] Template
   * for the URL of the custom service delivering licenses to end user players.
   * Not required when using Azure Media Services for issuing licenses.  The
   * template supports replaceable tokens that the service will update at
   * runtime with the value specific to the request.  The currently supported
   * token values are {AlternativeMediaId}, which is replaced with the value of
   * StreamingLocatorId.AlternativeMediaId, and {ContentKeyId}, which is
   * replaced with the value of identifier of the key being requested.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CencDrmConfiguration
   *
   * @returns {object} metadata of CencDrmConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CencDrmConfiguration',
      type: {
        name: 'Composite',
        className: 'CencDrmConfiguration',
        modelProperties: {
          playReady: {
            required: false,
            serializedName: 'playReady',
            type: {
              name: 'Composite',
              className: 'StreamingPolicyPlayReadyConfiguration'
            }
          },
          widevine: {
            required: false,
            serializedName: 'widevine',
            type: {
              name: 'Composite',
              className: 'StreamingPolicyWidevineConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = CencDrmConfiguration;
