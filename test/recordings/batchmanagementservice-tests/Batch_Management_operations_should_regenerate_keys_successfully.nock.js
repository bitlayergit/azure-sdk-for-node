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
.post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/regenerateKeys?api-version=2020-03-01', '*')
  .reply(200, "{\"accountName\":\"batchtestnodesdk\",\"primary\":\"IX48QpQkjmFEyEIp6JXP6h2vkTntMNN0T8X9gS/qMX3qlKOpHQguuc3C7mjrNEwmtg+rOg7bK2KCRNjJk7dZJg==\",\"secondary\":\"dNqPdm5FDOoBUPQWcU5MycxrVVObZah02pbYFrBRNufPRWQAj5ayvW9pDyp8wgJANJ+QHayEV1hfsOcRqSlY4Q==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '238',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': 'd80e0891-c9a0-4b70-a66a-0fb5ed9c2488',
  'x-ms-request-id': '578eb0ad-7d5e-440b-9e37-41146cb56428',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200321T012845Z:d80e0891-c9a0-4b70-a66a-0fb5ed9c2488',
  date: 'Sat, 21 Mar 2020 01:28:45 GMT',
  connection: 'close' });
 return result; }]];