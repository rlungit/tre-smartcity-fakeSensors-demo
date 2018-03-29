var bodyParser = require('body-parser');
var Repeat =require('repeat');


var config = require('./config');
var initialization = require('./initialization');

/*	This id is very important, it differentiates sensors from each other.
  	It must be unique.	*/
var id="2";



initialization.deviceConfiguration(config.provisionConfig).then(data=>{console.log("first step");console.log(config.provisionConfig);});
initialization.deviceProvision(config.provisionDevice ,id).then(data=>{console.log("second step");console.log(config.provisionDevice);});
initialization.deviceSendingMeasures(config.sendingDataObject, config.provisionDevice , id);





