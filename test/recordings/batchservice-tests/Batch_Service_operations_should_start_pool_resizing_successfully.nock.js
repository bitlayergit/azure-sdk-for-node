// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool2/resize?api-version=2020-03-01.11.0', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 21 Mar 2020 02:12:14 GMT',
  etag: '0x8D7CD3D459C738B',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '188b91ad-b340-48e0-af9b-67cc3dfb9494',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/pools/nodesdktestpool2/resize',
  date: 'Sat, 21 Mar 2020 02:12:14 GMT',
  connection: 'close' });
 return result; }]];