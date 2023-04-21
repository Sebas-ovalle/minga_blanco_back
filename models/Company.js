import mongoose from "mongoose"

let schema = new mongoose.Schema({
    name:{type:String,required:true},
    logo:{type:String,required:true},
    website:{type:String,required:true},
    description:{type:String,required:true},
    active:{type:String,required:true},
    user_id:{
        
    }


})