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
.patch('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2020-03-01', '*')
  .reply(409, "{\"error\":{\"code\":\"RequestedDefaultVersionNotActive\",\"message\":\"The application package corresponding to the requested default version is not active.\\nRequestId:25c2851b-1464-4195-aca8-58a30b6c23a3\\nTime:2020-03-21T01:28:02.1233138Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '258',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': '657c520c-509a-4a9c-a374-cfff5cdde05b',
  'x-ms-request-id': '25c2851b-1464-4195-aca8-58a30b6c23a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012802Z:657c520c-509a-4a9c-a374-cfff5cdde05b',
  date: 'Sat, 21 Mar 2020 01:28:01 GMT',
  connection: 'close' });
 return result; }]];