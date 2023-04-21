import mongoose from "mongoose"

let schema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    photo:{type:String, required:true},
    role:{type:Number, required:true},
    id_online:{type:Boolean, required:true},
    id_verified:{type:Boolean, required:true},
    verify_code:{type:String, required:true},
},{
    timestamp:true
})
let collection = "" //debe er siempre en prurall por que es un conjunto de recursos/datos/documentos y en lo posible en minuscula

let User = mongoose.model(schema,collection)
export default User 