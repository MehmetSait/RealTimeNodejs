/**
 * Created by mac on 1.06.2016.
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
//var bcrypt = require('bcrypt-nodejs');

var StorySchema=new Schema({
    creator:{type:Schema.Types.ObjectId, ref:'User'},
    content:String,
    created:{type:Date,defauly:Date.now}
});
module.exports=mongoose.model('Story',StorySchema);