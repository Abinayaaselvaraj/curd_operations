// console.log("Hello abi!!");
// const express = require('express');
// const mongoose= require('mongoose');
// const product=require('./products');
import express from 'express';
import mongoose from 'mongoose';
 import productRouter from './routes/routes.js';

const app = express();
const port = 3000;

// testing api
app.get('/testApi', (req, res) => {
  res.send('Hello World');
});

// Middlewear to convert the json
app.use(express.json());

//routers
app.use('/api/product',productRouter);

// server connection
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// Mongoose connection
mongoose.connect('mongodb+srv://abinayaselvaraj2503:jLf4Vn7VLgZy4IBd@cluster0.bcz2a1v.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch(error => console.error('Error connecting to MongoDB:', error.message));
  

























































































//   // // Post a product
// app.post('/api/products', async (req, res) => {
//     try{
//       const product = await Product.create(req.body);
//       res.status(200).json(product);
//     }
//     catch(error){
//       res.status(500).json({message: error.message});
//     }
  
//   })
  
//   // Get the Products
//   app.get('/api/products', async (req, res) => {
//       try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//       }
//       catch(error){
//         res.status(500).json({message: error.message});
//       }
//     })
    
//     // Get a product
//     app.get('/api/products/:id', async (req, res) => {
//       try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//       }
//       catch(error){
//         res.status(500).json({message: error.message});
//       }
//     })
    
//     // Update a product
//     app.put('/api/products/:id', async (req, res) => {
//       try{
//        const {id} = req.params;
//        const product = await Product.findByIdAndUpdate(id, req.body);
//        if(!product){
//         return res.status(404).json({message: 'Product not found'});
//        }
//        const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//       }
//       catch(error){
//         res.status(500).json({message: error.message});
//       }
//     })
    
//     // Delete a product
//     app.delete('/api/products/:id', async (req, res) => {
//       try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
    
//         if(!product){
//           return res.status(404).json({message: 'Product not found'});
//         }
//         res.status(200).json({message: "Product Deleted Succesfully"})
//       }
//       catch(error){
//         res.status(500).json({message: error.message});
//       }
//     })