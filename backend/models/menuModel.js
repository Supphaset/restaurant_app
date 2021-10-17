import mongoose from 'mongoose'

const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    thaiName:{
        type:String,
        required:true,
    },
    catagory:{
        type:String,
        rquired:true
    },
    price:{
        type: Number,
        rquired:true,
        default: 0
    },
    isRecommended:{
        type:Boolean,
        required:true,
        default: false
    }
})

const Menu = mongoose.model('Menu',menuSchema)

export default Menu