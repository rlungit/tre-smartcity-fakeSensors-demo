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
* docker 
* docker-compose
* nodejs
* npm
* details of nodejs modules -> TBD

***Other usefull tools:***
* Portainer
* MongoDB-express

***Installing containers and testing tools:***
* Download and install the containers by using following [docker-compose](https://github.com/TampereTC/tre-smartcity-frontEnd/blob/master/docker-compose.yml) file
* Locate the docker-compose file to folder and run: '#sudo docker-compose up -d'
* Clone the github project: [tre-smartcity-fakeSensors-demo](https://github.com/TampereTC/tre-smartcity-fakeSensors-demo)

***How to run test applcation:***
* locate to the folder where 'tre-smartcity-fakeSensors-demo' repository is cloned

'node sensor_genarator.js'

The nodejs is now running in 5 sec loop to generate data

***How to see sensor data on maps application***
* Open brower by using following url: http://0.0.0.0:3000/
Refresh the screen by F5 in order the see updated sensor data.
* If you'd like to explore sensor data in json format on browser then use the following url: http://0.0.0.0:3001/ 
![Client UI](https://github.com/TampereTC/tre-smartcity-fakeSensors-demo/blob/master/test/Screenshot%20from%202018-04-05%2013-29-57.png?raw=true "Map view")
