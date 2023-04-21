import {Schema,model, Types } from "mongoose"

let schema = new Schema({
    name:{type:String,requiered:true},
    last_name:{type:String,requiered:false},
    city: {type:String,requiered:true},
    country:{type:String,requiered:true},
    date:{type:Date },
    photo:{type:String,requiered:true},
    active:{type:Boolean,requiered:true},
    user_id:{type:Types.ObjectId, ref:"users", required: true}
    

},{
    timestamps:true
})
let colection = "authors"

let Author = model(schema, collection)

export default authors

export let authors = [{
    name: "alejandro",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'alejandro@mh.com.ar'
},{
    name: "lucas",
    last_name: "silva",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'lucas@mh.com.ar'
},{
    name: "jose",
    last_name: "lopez",
    city: "villa carlos paz",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'jose@mh.com.ar'
},{
    name: "eric",
    city: "resistencia",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'eric@mh.com.ar'
},{
    name: "igna",
    last_name: "borraz",
    city: "rosario",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'igna@mh.com.ar'
}]
