var bodyParser = require('body-parser');
var request = require('request');
var Promise = require('promise');


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


var deviceProvision = function deviceProvision(provisionDevice,id){
      provisionDevice.body.devices[0].device_id= provisionDevice.body.devices[0].device_id.substring(0, provisionDevice.body.devices[0].device_id-((provisionDevice.body.devices[0].device_id).length-21));
      provisionDevice.body.devices[0].entity_name=provisionDevice.body.devices[0].entity_name.substring(0, provisionDevice.body.devices[0].entity_name-((provisionDevice.body.devices[0].entity_name).length-12));
      provisionDevice.body.devices[0].device_id=provisionDevice.body.devices[0].device_id+id;
      provisionDevice.body.devices[0].entity_name=provisionDevice.body.devices[0].entity_name+id;
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


var deviceSendingMeasures = function deviceSendingMeasures(sendingDataObject, provisionDevice, id){
    sendingDataObject.url=sendingDataObject.url+provisionDevice.body.devices[0].device_id;
    setInterval(() => {
        //sendingDataObject.body="t|"+randomGenerator.getRandomTemperature(-30,24)+"|h|"+randomGenerator.getRandomHumidity(0,50)+"|l1|"+randomGenerator.geo().longitude+"|l2|"+randomGenerator.geo().latitude;
        sendingDataObject.body="t|"+randomGenerator.getRandomTemperature(-30,24)+"|h|"+randomGenerator.getRandomHumidity(0,50)+"|l1|23.86|l2|61.497978";
        console.log(sendingDataObject);
        request({
            headers:sendingDataObject.headers,
            url: sendingDataObject.url,
            method: sendingDataObject.method,
            body:sendingDataObject.body
            }, function (error, response,body){
              });

}, 5000);
}


exports.deviceConfiguration=deviceConfiguration;
exports.deviceProvision=deviceProvision;
exports.deviceSendingMeasures=deviceSendingMeasures;
