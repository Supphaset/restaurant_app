import express from "express"
import {getMenus, getMenusByCat, getMenusById} from '../controllers/menuControllers.js'

const router = express.Router()

router.get('/',getMenus)
router.get('/id/:id',getMenusById)
router.get('/:cat',getMenusByCat)

export default router