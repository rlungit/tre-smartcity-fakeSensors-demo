var bodyParser = require('body-parser');
var request = require('request');
var Promise = require('promise');
var fs = require('node-fixtures');
var randomGenerator= require('./randomFunctions');

var deviceConfiguration = function deviceConfiguration(provisionConfig){
      return new Promise(function (fulfill, reject){  
      request({
            headers:provisionConfig.headers,
            url: provisionConfig.url,
            method: provisionConfig.method,
            json: true,
            body:provisionConfig.body
            }, function (error, response,body){
                if (error) reject(error);
                else return fulfill(response);
            });
    })
}

var deviceProvision = function deviceProvision(provisionDevice, temp_json){

      provisionDevice.body.devices.device_id=temp_json.device_id+temp_json.sensor_id;
      provisionDevice.body.devices.entity_name=temp_json.sensorname;

      return new Promise(function (fulfill, reject){
      request({
            headers:provisionDevice.headers,
            url: provisionDevice.url,
            method: provisionDevice.method,
            json: true,
            body:provisionDevice.body
            }, function (error, response,body){
                if (error) reject(error);
                else return fulfill(response);
            });
    })
}


var deviceSendingMeasures = function deviceSendingMeasures(sendingDataObject){
    //var id = temp_json.device_id;
    
    //sendingDataObject.url=sending_url;
        //Generate sensor data. Temperature value range: e.g -2 - 10 C, Humidity range: 35 - 50, sensor geo location: 23.7632968 61.4888933
        return new Promise(function (fulfill, reject){
        request({
            headers:sendingDataObject.headers,
            url: sendingDataObject.url,
            method: sendingDataObject.method,
            body:sendingDataObject.body
            }, function (error, response,body){ 
              });
        }) 
}

module.exports={
  deviceConfiguration,
  deviceProvision,
  deviceSendingMeasures
};
