const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name:{type:String },
    description:{type:String},
    cover:{type:String},
    category:{type:String},
    createdAt:{type:Date,default:Date.now}
});



module.exports =model('users',mySchema);
