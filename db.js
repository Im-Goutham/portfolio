var mongoose = require('mongoose');
var config=require('./config');

mongoose.connect(config.dbUrl);

exports.mongoose=mongoose;
