const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String ,
    user :{ type: String , unique :true },
    community:{type:String},
    likes:{type:Number, default:0},
    comment:{type:Array, default:"0"},
    share:{type:Number ,default:0},
    createdAt:{type:Date,default:Date.now}
});



module.exports =model('post',mySchema);
