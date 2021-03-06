// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e2ee545b-783f-4634-a277-e35f55c90660';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup5003/providers/Microsoft.Cdn/profiles/cdnTestProfile5528/endpoints/cdnTestEndpoint9193/stop?api-version=2017-10-12')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint9193.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n    \r\n  ],\"deliveryPolicy\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '587',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/operationresults/36c1af28-b13b-4807-8d83-8b4536cd374b/profileresults/cdnTestProfile5528/endpointresults/cdnTestEndpoint9193?api-version=2017-10-12',
  'retry-after': '10',
  'x-ms-request-id': '5e3eab32-10cf-46e5-b4ee-2c517d7d05bf',
  'x-ms-client-request-id': 'd061c5f3-597a-4eda-a309-f6d6f8dcfbb9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/operationresults/36c1af28-b13b-4807-8d83-8b4536cd374b?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'fc2db73b-9ffa-45a8-8ffe-02e3911400fd',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195931Z:fc2db73b-9ffa-45a8-8ffe-02e3911400fd',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:59:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup5003/providers/Microsoft.Cdn/profiles/cdnTestProfile5528/endpoints/cdnTestEndpoint9193/stop?api-version=2017-10-12')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint9193.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"probePath\":null,\"geoFilters\":[\r\n    \r\n  ],\"deliveryPolicy\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '587',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/operationresults/36c1af28-b13b-4807-8d83-8b4536cd374b/profileresults/cdnTestProfile5528/endpointresults/cdnTestEndpoint9193?api-version=2017-10-12',
  'retry-after': '10',
  'x-ms-request-id': '5e3eab32-10cf-46e5-b4ee-2c517d7d05bf',
  'x-ms-client-request-id': 'd061c5f3-597a-4eda-a309-f6d6f8dcfbb9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/operationresults/36c1af28-b13b-4807-8d83-8b4536cd374b?api-version=2017-10-12',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'fc2db73b-9ffa-45a8-8ffe-02e3911400fd',
  'x-ms-routing-request-id': 'WESTUS2:20180226T195931Z:fc2db73b-9ffa-45a8-8ffe-02e3911400fd',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 19:59:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/operationresults/36c1af28-b13b-4807-8d83-8b4536cd374b?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'e4be6cbe-e16a-4c96-9746-0dda8b04ae06',
  'x-ms-client-request-id': 'df75cc71-f9d0-479b-89de-148e6f651aab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1d4e9a0f-d874-4260-ac21-f9816194b416',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200002Z:1d4e9a0f-d874-4260-ac21-f9816194b416',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:00:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/operationresults/36c1af28-b13b-4807-8d83-8b4536cd374b?api-version=2017-10-12')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'e4be6cbe-e16a-4c96-9746-0dda8b04ae06',
  'x-ms-client-request-id': 'df75cc71-f9d0-479b-89de-148e6f651aab',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1d4e9a0f-d874-4260-ac21-f9816194b416',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200002Z:1d4e9a0f-d874-4260-ac21-f9816194b416',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:00:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup5003/providers/Microsoft.Cdn/profiles/cdnTestProfile5528/endpoints/cdnTestEndpoint9193/origins/newname?api-version=2017-10-12', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/profiles/cdnTestProfile5528/endpoints/cdnTestEndpoint9193/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'a205acc5-d18e-4930-b7e9-5662ad7840dd',
  'x-ms-client-request-id': 'd1690919-259d-471f-bc6d-66efb726da8f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '205886ff-e8db-47a6-a791-3bd8070351ea',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200003Z:205886ff-e8db-47a6-a791-3bd8070351ea',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:00:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourceGroups/cdnTestGroup5003/providers/Microsoft.Cdn/profiles/cdnTestProfile5528/endpoints/cdnTestEndpoint9193/origins/newname?api-version=2017-10-12', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/e2ee545b-783f-4634-a277-e35f55c90660/resourcegroups/cdnTestGroup5003/providers/Microsoft.Cdn/profiles/cdnTestProfile5528/endpoints/cdnTestEndpoint9193/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '412',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'a205acc5-d18e-4930-b7e9-5662ad7840dd',
  'x-ms-client-request-id': 'd1690919-259d-471f-bc6d-66efb726da8f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '205886ff-e8db-47a6-a791-3bd8070351ea',
  'x-ms-routing-request-id': 'WESTUS2:20180226T200003Z:205886ff-e8db-47a6-a791-3bd8070351ea',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 26 Feb 2018 20:00:03 GMT',
  connection: 'close' });
 return result; }]];