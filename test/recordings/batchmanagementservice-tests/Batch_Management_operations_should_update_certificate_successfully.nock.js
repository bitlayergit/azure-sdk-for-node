// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-cff2ab63c8c955aaf71989efa641b906558d9fb7?api-version=2020-03-01', '*')
  .reply(200, "{\"name\":\"sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"type\":\"Microsoft.Batch/batchAccounts/certificates\",\"etag\":\"W/\\\"0x8D7CD3737075B2B\\\"\",\"properties\":{\"thumbprintAlgorithm\":\"sha1\",\"thumbprint\":\"cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2020-03-21T01:28:52.6276322Z\",\"format\":\"Pfx\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Sat, 21 Mar 2020 01:28:52 GMT',
  etag: 'W/"0x8D7CD3737075B2B"',
  'x-ms-correlation-request-id': '11737141-ac50-426b-81a9-ed56081f066f',
  'x-ms-request-id': '3c10a2c4-7e11-4b91-b90c-bea44548134d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012854Z:11737141-ac50-426b-81a9-ed56081f066f',
  date: 'Sat, 21 Mar 2020 01:28:54 GMT',
  connection: 'close' });
 return result; }]];