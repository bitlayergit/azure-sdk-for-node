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
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/does-not-exist/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2020-03-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'does-not-exist' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2cd456f3-2f84-4d27-ae62-7314b05419b1',
  'x-ms-correlation-request-id': '2cd456f3-2f84-4d27-ae62-7314b05419b1',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012842Z:2cd456f3-2f84-4d27-ae62-7314b05419b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  date: 'Sat, 21 Mar 2020 01:28:42 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; }]];