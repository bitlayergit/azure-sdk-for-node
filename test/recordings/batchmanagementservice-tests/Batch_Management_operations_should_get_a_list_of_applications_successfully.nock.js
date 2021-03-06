// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications?api-version=2020-03-01')
  .reply(200, "{\"value\":[{\"type\":\"Microsoft.Batch/batchAccounts/applications\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id\",\"name\":\"my_application_id\",\"etag\":\"W/\\\"0x8D7EE6983921623\\\"\",\"properties\":{\"displayName\":\"my_application_name\",\"allowUpdates\":true}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '387',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': '3700f8f7-4ee1-498e-8b7c-fffcb598a0bc',
  'x-ms-request-id': 'c197a97c-6249-4faf-8fb3-f3bab09d0103',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072205Z:3700f8f7-4ee1-498e-8b7c-fffcb598a0bc',
  date: 'Sat, 02 May 2020 07:22:05 GMT',
  connection: 'close' });
 return result; }]];