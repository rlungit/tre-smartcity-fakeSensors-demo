var request = require('request');
var Promise = require('promise');
var location=[];




var getRandomTemperature = function getRandomTemperature(min, max) {
  return (Math.floor(Math.random() * (max - min) + min)).toString();
}

var getRandomHumidity = function getRandomHumidity(min, max) {
  return (Math.floor(Math.random() * (max - min) + min)).toString();
}

var geo = function geo(){
	
     request({
            url: "http://freegeoip.net/json/",
            method: "GET",
            json: true,   // <--Very important!!!
            }, function (error, response,body){
                if (!error) {location=body}
                
            });
     return location;
}


exports.getRandomTemperature=getRandomTemperature;
exports.getRandomHumidity=getRandomHumidity;
exports.geo=geo;