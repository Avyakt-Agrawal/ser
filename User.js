const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    user_name:{
        type:String,
        required:true
    }
    email:{
       type:String,
       required:true 
    }
    mobile:{
        type:Number,
        required:true
    }
    password:{
        type:String,
        required:true
    }
})

module.exports=user=mogoose.model('user',UserSchema)