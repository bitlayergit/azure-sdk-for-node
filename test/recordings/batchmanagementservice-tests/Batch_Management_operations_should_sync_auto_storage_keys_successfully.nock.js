// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/syncAutoStorageKeys?api-version=2020-03-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '028e7882-6638-42ee-8474-9ffe27c2dcdc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'c4930e60-aa35-4d94-8738-319ee23157e2',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012846Z:c4930e60-aa35-4d94-8738-319ee23157e2',
  date: 'Sat, 21 Mar 2020 01:28:46 GMT',
  connection: 'close' });
 return result; }]];