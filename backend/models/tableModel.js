import mongoose from 'mongoose'

const tableSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    zone:{
        type:String,
        required:true
    },
    order:[{
        name:{type:String, required:true},
        qty:{type:Number, required:true},
        price:{type:Number, required:true},
        isDelivered:{type:Boolean,default:false, required:true},
        menu:{type:mongoose.Schema.Types.ObjectId,ref:'Menu', required:true},
    }],
    isPaid:{
        type: Boolean,
        required:true,
        default:false
    },
    isOrder:{
        type:Boolean,
        return:true,
        default:false
    }
},{
    timestamps:true
})

const Table = mongoose.model('Table',tableSchema)

export default Table