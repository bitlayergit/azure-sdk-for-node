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
.post('/jobs/HelloWorldJobNodeSDKTest/disable?api-version=2020-03-01.11.0', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 21 Mar 2020 02:16:11 GMT',
  etag: '0x8D7CD3DD307B88C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bdeef896-da36-4c8b-b839-d1a65576b159',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/disable',
  date: 'Sat, 21 Mar 2020 02:16:10 GMT',
  connection: 'close' });
 return result; }]];