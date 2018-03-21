'use strict';

module.exports = function(app){
    app.use('/api/product',require('./api/product'));
}