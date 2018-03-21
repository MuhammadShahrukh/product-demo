'use strict';

const path = require('path');
const PORT = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/Product-Demo');
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./routes')(app);

app.route('/*')
.get(function(req, res) {
    res.sendFile(path.resolve( __dirname + '/client/index.html'));
});

app.listen(PORT,()=>{
    console.log('Server listening on PORT : '+PORT);
})