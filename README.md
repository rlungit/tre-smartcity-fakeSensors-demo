# tre-smartcity-fakeSensors-demo

## This repository is providing testing tool to generate content for Tampere smart City specific Fiware IoT platform.

**Overview of Fiware demo installation**
![Architecture diagram](https://github.com/TampereTC/tre-smartcity-fakeSensors-demo/blob/master/test/reference_env.jpg?raw=true "Architecture diagram")

It includes (for the moment) the following components:

* [Orion Context Broker](http://catalogue.fiware.org/enablers/publishsubscribe-context-broker-orion-context-broker), providing the NGSIv2 interfaces.
* [Backend Device Management - IDAS](http://catalogue.fiware.org/enablers/backend-device-management-idas),  to connect IoT devices (temperature & humidity).
* [tre-smartcity-frontEnd](https://github.com/TampereTC/tre-smartcity-frontEnd), Client map application to visualize sensors on top of google map.
* [tre-smartcity-backEnd](https://github.com/TampereTC/tre-smartcity-backEnd), RESTful API service to serve client apps
* [tre-smartcity-fakeSensors-demo](https://github.com/TampereTC/tre-smartcity-fakeSensors-demo), Toolset to managed sensor(s) registration to Fiware and generate in loop fake sensor data. Based on json list of temp/hum sensor data with geo locations.



**Installation of tre-smartcity Fiware Containers**

Referense implementation with deployment modules are based on container technologies. Follow installation instructions are based on localhost setup on linux environment. Tested on Ubuntu 16.04 LTS enviroment.
***Requirements:***
