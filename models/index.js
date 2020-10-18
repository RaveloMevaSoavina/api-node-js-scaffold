import mongoose from "mongoose";

/*
 * Index : name of the collection
 * field1 and field2 : name of field in one document
 */

const indexModel = mongoose.model("Index", new mongoose.Schema({
    field1 : {type : String , required : true},
    field2 : {type : String, required: true}
}))