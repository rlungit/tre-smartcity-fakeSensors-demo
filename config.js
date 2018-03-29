var randomGenerator= require('./randomFunctions');



//General configuration for Production Enviornment
var host="localhost";
var apiKey="nokiaTestingSensorsGroup";
var headers = {
			'Content-Type':        'application/json',
            'Fiware-Service':      'development',
            'Fiware-ServicePath':  '/nokiaHV30',
            'Cache-Control': 	   'no-cache' };


//Construction object for Provisioning the configuration
var provisionConfig={};
provisionConfig.method="POST";
provisionConfig.url = "http://"+host+":4041/iot/services";
provisionConfig.headers= headers;
provisionConfig.body={ 
    "services": [ 
      {
          "resource": "",
          "apikey": apiKey,
          "type": "fakeSensor"
      }]};

//Construction object for Provisioning the device
var provisionDevice={};
provisionDevice.method="POST";
provisionDevice.url = "http://"+host+":4041/iot/devices";
provisionDevice.headers=headers;
provisionDevice.body={ 
    "devices": [ 
        { 
            "device_id": "nokiaHV30GarageSensor", 
            "entity_name": "garageSensor", 
            "entity_type": "fakeSensor",
            "attributes": [
              {	"object_id": "t", "name": "temperature", "type": "degrees"},
              { "object_id": "h", "name": "humidity", "type": "degrees"},
              { "object_id": "l1", "name": "longitude", "type": "degrees"},
              { "object_id": "l2", "name": "latitude", "type": "degrees"}
            ]
        }]};

//Construction of sending measures object
var sendingDataObject={};
sendingDataObject.method="POST";
sendingDataObject.url="http://"+host+":7896/iot/d?k="+apiKey+"&i=";
sendingDataObject.headers={'content-type':'text/plain' };
sendingDataObject.body="t|"+randomGenerator.getRandomTemperature(-30,24)+"|h|"+randomGenerator.getRandomHumidity(0,50);



module.exports={
	provisionConfig:provisionConfig,
	provisionDevice:provisionDevice,
	sendingDataObject:sendingDataObject
};
