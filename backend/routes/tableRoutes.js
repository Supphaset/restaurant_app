import express from 'express'
import {getTableByZone,getTableById, updateTableOrder, clearTableOrder} from '../controllers/tableControllers.js'

const router = express.Router()

router.get('/id/:id',getTableById)
router.get('/:zone',getTableByZone)
router.route('/update/:id').put(updateTableOrder)
router.route('/clear/:id').put(clearTableOrder)


export default router