// Modulo Parametros Produccion
import configData1 from './config/configData.json' assert { type: 'json' };
//const configData2 = require('./config/configData')
// Modulo Documentador Swagger
//const {swaggerDocs} = require('./swagger');
// Modulo Eventos Node
import { EventEmitter } from 'node:events';
//import EventEmitter
// Modulo HTTP
const express = require('express');
const app = express();

app.use('/', require('.router'));

var TIME_ENV=2000;

// Validacion si se utilizan variables de entorno
if(configData1.variables.NODE_ENV!="production"){
   require('dotenv').config();
   TIME_ENV=process.env.TIME_ENV;
}
else{
   TIME_ENV=configData1;
}

console.log(TIME_ENV);

class MyEmitter extends EventEmitter {}

// Instanciar un objeto de la clase EventEmitter
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');



// Metodo emit() <-> trigger del evento
//myEmitter.emit('event', Date.now());       // Se ejecuta ahora


/*setInterval(function(){                      // Se ejecuta cada 500mS
   myEmitter.emit('event', 1,2,5,6,76); 
   }, TIME_ENV);


// First listener
myEmitter.on('event', function firstListener() {
   console.log('tarea completada');
 });
 // Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
   console.log(`cargar entidad ${arg1}, ${arg2} in second listener`);
 });
 // Third listener
myEmitter.on('event', function thirdListener(...args) {
   const parameters = args.join(', ');
   console.log(`event with parameters ${parameters} in third listener`);
 });*/
 

 
/*const mysql = new Database('mysql');
console.log(mysql.data); // output sql*/





