'use strict';

const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT ||4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const papaParse = require('papaparse');
const cors = require('cors');

const express = require('express');
const app = express();

const Product = require('./api/product/product.model');

// connecting to database
mongoose.connect('mongodb://admin:12345678@ds121889.mlab.com:21889/product-demo');
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use(express.static( __dirname+ '/client' ));

// initializing body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())



require('./routes')(app);


// this method will create product mock data into our database
async function createDatabase() {

    try{
    
        // fetching data from csv file
        var file = fs.readFileSync(path.join(__dirname, '/assets/mock-data.csv'), { encoding: 'utf8' });
        // parsing data into key,value pair into an array
        var parsedResult = papaParse.parse(file,{
            header: true,
            dynamicTyping: true,
            encoding: "UTF-8",
            delimiter: ",",
            quoteChar: '"',
            newline: '\n',
            skipEmptyLines: true
        });

        parsedResult.data.forEach(function(d){
            d['_id'] = d['id'];
            delete d['id']
        })
       
        // removing old product data from database
        await Product.remove({});
        // creating new product data in database
        await Product.create(parsedResult.data);


        console.log('Product data loaded from mock csv file successfully');

    }catch(error){
        console.log(error);
    }

}

createDatabase()

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/client/dist/index.html');
});

app.listen(PORT, () => {
    console.log('Server listening on PORT : ' + PORT);
})