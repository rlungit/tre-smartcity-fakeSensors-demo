var bodyParser = require('body-parser');
var Repeat =require('repeat');


var config = require('./config');
var initialization = require('./initialization');

/*	This id is very important, it differentiates sensors from each other.
  	It must be unique.	*/
var id="4";



initialization.deviceConfiguration(config.provisionConfig).then(data=>{});
initialization.deviceProvision(config.provisionDevice ,id).then(data=>{});
initialization.deviceSendingMeasures(config.sendingDataObject, config.provisionDevice , id);





