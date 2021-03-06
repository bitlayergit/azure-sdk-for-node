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
.post('/pools/nodesdktestpool1/evaluateautoscale?api-version=2020-03-01.11.0', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2020-03-21T02:12:10.048695Z\",\"results\":\"$TargetDedicatedNodes=2;$TargetLowPriorityNodes=0;$NodeDeallocationOption=requeue\",\"error\":{\r\n    \"code\":\"AutoScalingFormulaEvaluationError\",\"message\":\"The specified auto-scaling formula has evaluation error\",\"values\":[\r\n      {\r\n        \"name\":\"Message\",\"value\":\"Line 1, Col 1: Undefined symbol: something_useless\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7487d7a0-d772-4c01-b583-195ce216fc11',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1/evaluateautoscale',
  date: 'Sat, 21 Mar 2020 02:12:10 GMT',
  connection: 'close' });
 return result; }]];