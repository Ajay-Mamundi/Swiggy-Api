const mongoose = require('mongoose')

// defining the schema
const restaurantSchema = new mongoose.Schema({
    areaName : {
        type : String,
    },
    avgRating : {
        type : String
    },
    costForTwo : {
        type : String

    },
    cuisines : {
        type : Array

    },
    imageLink :{
         type:String
    },
    name: {
        type : String

    }
},{versionKey:false})

// model
const Restaurant= mongoose.model('restaurantlist', restaurantSchema)

// Exporting the model
const userSchema = new mongoose.Schema({
    contact :{
        type : Number,
    },
    email : {
        type : String,
    },
    password : {
        type : String,

    }, userName : {
        type : String,
    }
},{versionKey:false})

// model
const Users = mongoose.model('userDetail', userSchema)

// Exporting the model
module.exports = {Restaurant,Users}