'use strict';

const Product = require('./product.model');

exports.fetchAll = async function(req,res){
    try{

        let products = await Product.find({});

        res.json(products);

    }catch(error){
        res.status(500).json(error)
    }
}

exports.fetchById = async function(req,res){
    try{

        let product = await Product.findById(req.params.productId);

        if(!product){
            return res.status(404).json('Product not found');
        }

        res.json(product);

    }catch(error){
        res.status(500).json(error)
    }
}

exports.create = async function(req,res){
    try{

        let productData = {
            _id : req.body['_id'],
            name : req.body['name'],
            image: req.body['image'],
            link : req.body['link'],
            price: req.body['price'],
            currency: req.body['currency'],
            description: req.body['description']
        }
        let product = await Product.create(productData);

        res.json(product);

    }catch(error){
        res.status(500).json(error)
    }
}

exports.update = async function(req,res){
    try{

        let toUpdate = req.body;

        await Product.findOneAndUpdate({ _id : req.params.productId },toUpdate);

        res.json('Product updated successfully');

    }catch(error){
        res.status(500).json(error)
    }
}

exports.delete = async function(req,res){
    try{

        await Product.remove({_id : req.params.productId});

        res.json('Product deleted successfully');

    }catch(error){
        res.status(500).json(error)
    }
}