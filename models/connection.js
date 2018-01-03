const mongoose = require('mongoose');
const config = require('./config.json');

//to resolve warning regarding promise in mongoose
mongoose.Promise = global.Promise;

mongoose.connect(config.dburl);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + config.dburl);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    })
})

