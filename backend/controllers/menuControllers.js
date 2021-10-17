import asyncHandler from 'express-async-handler'
import Menu from '../models/menuModel.js'

const getMenus = asyncHandler(async (req,res) => {
    const menus = await Menu.find({isRecommended:true})
    res.json(menus)
})

const getMenusById = asyncHandler(async(req,res)=>{
    const menu = await Menu.findById(req.params.id)
    res.json(menu)
})

const getMenusByCat = asyncHandler(async(req,res) => {
    const menus = await Menu.find({catagory:req.params.cat})
    if(menus){
        res.json(menus)
    }else{
        res.status(404)
        throw new Error('Catagory not found')
    }
})

export {getMenus,getMenusByCat,getMenusById}