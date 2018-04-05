var bodyParser = require('body-parser');
var Repeat =require('repeat');
var fs = require('node-fixtures'); // fixture json files are located on ./test/fixtures folder under the project
var randomGenerator= require('./randomFunctions');
var initialization = require('./initialization');
var json_list = require("./test/fixtures/fake_sensors.json");

/*	This id is very important, it differentiates sensors from each other.
  	It must be unique.	*/

// Configure Fiware interface (do ones)
//General configuration for Production Environment
var host = fs.fake_sensor_setup.service.host;
var headers = {
	    'Content-Type':        'application/json',
      'Fiware-Service':      'development',
      'Fiware-ServicePath':  '/nokiaHV30',
      'Cache-Control': 	   'no-cache' };
var provisionConfig={};
    provisionConfig.method="POST";
    provisionConfig.url = "http://"+host+":4041/iot/services";
    provisionConfig.headers= headers;
    provisionConfig.body={ 
    "services": [ 
      {
          "resource": "",
          "apikey": fs.fake_sensor_setup.service.apiKey,
          "type": fs.fake_sensor_setup.service.sensortype
      }]};
initialization.deviceConfiguration(provisionConfig);
console.log("-- First step, configure Fiware interface");console.log(provisionConfig);



// Register the sensors (line by line until end of json)
for(var i = 0; i < json_list.length; i++) {
    var t_json = json_list[i];
	var id=t_json.sensor_id;
	var provisionDevice ={};
        provisionDevice.method="POST";
        provisionDevice.url = "http://"+fs.fake_sensor_setup.service.host+":4041/iot/devices";
        provisionDevice.headers=headers;
        provisionDevice.body={ 
        "devices": [ 
          { 
            "device_id": t_json.device_id+t_json.sensor_id, 
            "entity_name": t_json.sensorname, 
            "entity_type": fs.fake_sensor_setup.service.sensortype,
            "attributes": [
              { "object_id": "t", "name": "temperature", "type": "degrees"},
              { "object_id": "h", "name": "humidity", "type": "degrees"},
              { "object_id": "l1", "name": "longitude", "type": "degrees"},
              { "object_id": "l2", "name": "latitude", "type": "degrees"}
            ]
          }]};
          //console.log("--------3>");console.log(provisionDevice);
	initialization.deviceProvision(provisionDevice, t_json);
	console.log("-- Second step, register sensors ID:"+id);console.log(provisionDevice);
}
// Genarate sensor data (line by line until end of json, repeat in 5 sec loops)
setInterval(() =>  {
	
	for(var i = 0; i < json_list.length; i++) {
    	var t_json = json_list[i];
    	var id=t_json.sensor_id;
    	var sendingDataObject={};
			sendingDataObject.method="POST";
			sendingDataObject.url="http://"+fs.fake_sensor_setup.service.host+":7896/iot/d?k="+fs.fake_sensor_setup.service.apiKey+"&i="+t_json.device_id+t_json.sensor_id;
			sendingDataObject.headers={'content-type':'text/plain'};
			sendingDataObject.body="t|"+randomGenerator.getRandomTemperature(t_json.temp_range_low,t_json.temp_range_high)+"|h|"+randomGenerator.getRandomHumidity(t_json.hum_range_low,t_json.hum_range_high)+"|l1|"+t_json.longitude+"|l2|"+t_json.latitude;
	
		initialization.deviceSendingMeasures(sendingDataObject);
		console.log("-- Third step, Generate data for sensors ID:"+id);console.log(sendingDataObject);
		}
    
          //console.log("--------2>");console.log(provisionDevice);
}, 5000);