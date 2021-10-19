import asyncHandle from 'express-async-handler'
import Table from '../models/tableModel.js'


const getTableByZone = asyncHandle(async (req,res)=> {
    const tables = await Table.find({zone:req.params.zone})
    res.json(tables)
})

const getTableById = asyncHandle(async(req,res)=>{
    const table = await Table.findById(req.params.id)
    res.json(table)
})

const updateTableOrder = asyncHandle(async(req,res) =>{
    const table = await Table.findById(req.params.id)
    if(table){
        table.order = req.body
        table.isOrder = true
        const updatedTable = await table.save()
        res.json(updatedTable)
    }else{
        res.status(404)
        throw new Error('Table not found')
    }
})

const updateCheckTable = asyncHandle(async(req,res) =>{
    const table = await Table.findById(req.params.id)
    if(table){
        table.isPaid = true
        const updatedTable = await table.save()
        res.json(updatedTable)
    }else{
        res.status(404)
        throw new Error('Table not found')
    }
})

const clearTableOrder = asyncHandle(async(req,res) =>{
    const table = await Table.findById(req.params.id)
    if(table){
        table.order = []
        table.isOrder = false
        table.isPaid =false
        const updatedTable = await table.save()
        res.json(updatedTable)
    }else{
        res.status(404)
        throw new Error('Table not found')
    }
})

const getTableWithOrder = asyncHandle(async(req,res)=>{
    const tables = await Table.find({isOrder:true})
    if(tables){
        res.json(tables)
    }else{
        res.json([])
    }
})

const getIsPaidTable = asyncHandle(async(req,res)=>{
    const tables = await Table.find({isPaid:true})
    if(tables){
        res.json(tables)
    }else{
        res.json([])
    }
})

export {getTableByZone,getTableById,updateTableOrder,clearTableOrder,getTableWithOrder,updateCheckTable,getIsPaidTable}