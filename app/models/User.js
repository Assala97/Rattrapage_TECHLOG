//--- Module dependencies
const mongoose 	= require('mongoose'),
    Schema	 	= mongoose.Schema,
    crypto      = require('crypto');

//------------------------------------------- Resources Schema
let UserSchema = new Schema({
    nom    : String,
    login    : String,
    password    : String
});

mongoose.model('User', UserSchema);
