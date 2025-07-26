const mongoose=require("mongoose")


const ProductShema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    price:{
        type:Number,
        min:0.1,
        max:9999,
        required:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:true,
    }
})

const Product=mongoose.model("Product",ProductShema)

module.exports=Product