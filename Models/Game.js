import mongoose from "mongoose"
const  {Schema , model} = mongoose
const gameSchema = new Schema({
name :String,
year: {
    type:Number,
    required :true
},
onSale: {
    type:Boolean,
    required :true
}

},{timestamps : true});

export default model("Game",gameSchema);
