var bodyParser = require('body-parser');
var Repeat =require('repeat');


var config = require('./config');
var initialization = require('./initialization');
var r=require('./randomFunctions');

/*	This id is very important, it differentiates sensors from each other.
  	It must be unique.	*/
var id="3";


initialization.deviceConfiguration(config.provisionConfig).then(data=>{});
initialization.deviceProvision(config.provisionDevice ,id).then(data=>{});
initialization.deviceSendingMeasures(config.sendingDataObject, config.provisionDevice , id);




