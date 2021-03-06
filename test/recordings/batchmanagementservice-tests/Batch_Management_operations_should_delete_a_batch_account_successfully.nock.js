// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': 'fb7fcdfd-4b07-4371-88e4-0907f1c94603',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '961fed79-d421-4824-97dc-2141c8083211',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072452Z:961fed79-d421-4824-97dc-2141c8083211',
  date: 'Sat, 02 May 2020 07:24:52 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': 'c41283bf-060a-4f42-9cc6-a054ae919be2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '573e485f-5791-4d46-b1a7-c849a3218c80',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072523Z:573e485f-5791-4d46-b1a7-c849a3218c80',
  date: 'Sat, 02 May 2020 07:25:22 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': 'f5b47b53-94c9-4a1c-be8e-ac5dc0e9dfd1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2e366614-0273-4a5d-a4ef-c95c022e7599',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072553Z:2e366614-0273-4a5d-a4ef-c95c022e7599',
  date: 'Sat, 02 May 2020 07:25:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '342eeeef-5993-4f77-859b-78f3aa636dd2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'b8e1c846-c54d-4cc4-b4ab-f3e74cfc774e',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072624Z:b8e1c846-c54d-4cc4-b4ab-f3e74cfc774e',
  date: 'Sat, 02 May 2020 07:26:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '2b751dde-e281-4011-8cf4-8f8bb621d748',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'e6830c9e-b3d6-478f-b544-2085ba875956',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072655Z:e6830c9e-b3d6-478f-b544-2085ba875956',
  date: 'Sat, 02 May 2020 07:26:54 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '5cefdd59-719b-4745-81ca-88e2d8cf7722',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '0f3ca0f9-8dc7-4dde-bebc-994ddd67aea8',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072725Z:0f3ca0f9-8dc7-4dde-bebc-994ddd67aea8',
  date: 'Sat, 02 May 2020 07:27:25 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '8b2ed014-9f81-4004-a27e-2d0c2d1335e7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4f3ab872-a9ae-499c-affa-9c67171786bc',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072756Z:4f3ab872-a9ae-499c-affa-9c67171786bc',
  date: 'Sat, 02 May 2020 07:27:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '6486052d-35d6-4225-92f2-7636533b9650',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '3c0156b5-fb5e-42c4-b745-d27cf3a544e4',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072826Z:3c0156b5-fb5e-42c4-b745-d27cf3a544e4',
  date: 'Sat, 02 May 2020 07:28:26 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': 'd2419f70-7686-49f3-bb02-fea874859219',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11997',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'd20e6a04-4c2d-43ed-b5de-a345e9ea788e',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072857Z:d20e6a04-4c2d-43ed-b5de-a345e9ea788e',
  date: 'Sat, 02 May 2020 07:28:56 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '734d3193-314c-4fcd-9276-9d643ac23fff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'db3a2e95-5e96-4570-84ab-0ecd7370bbaa',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072928Z:db3a2e95-5e96-4570-84ab-0ecd7370bbaa',
  date: 'Sat, 02 May 2020 07:29:27 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01',
  'retry-after': '15',
  'x-ms-request-id': '5f88035b-7391-4e20-9848-c4cc5c0fd263',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '37bf7116-037f-4d76-b37a-76a3271cd712',
  'x-ms-routing-request-id':
   'WESTUS:20200502T072958Z:37bf7116-037f-4d76-b37a-76a3271cd712',
  date: 'Sat, 02 May 2020 07:29:57 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/providers/Microsoft.Batch/locations/japaneast/accountOperationResults/batchtestnodesdk-fb7fcdfd-4b07-4371-88e4-0907f1c94603?api-version=2020-03-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '4559e95f-9428-4376-9dd8-933319888f9e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'd58319e8-1007-49ec-b3a4-1a625776fe27',
  'x-ms-routing-request-id':
   'WESTUS:20200502T073029Z:d58319e8-1007-49ec-b3a4-1a625776fe27',
  date: 'Sat, 02 May 2020 07:30:28 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];