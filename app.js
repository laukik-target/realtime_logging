const express = require('express');
const app = express();
var winston = require('winston');
const http = require('http').Server(app);


const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

http.listen(3200, () => { console.log("ef-backend started"); }); //Startig Application

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

function logEvery2Seconds(i) {
    setTimeout(() => {
        logger.info('Infinite Loop Test n:', i);
        console.log('Infinite Loop Test n:', i);
        logEvery2Seconds(++i);
    }, 2000)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
    console.log('Infinite Loop Test interval n:', i++);
}, 2000)

module.exports = app;
