import express from 'express'
import {getTableByZone,getTableById, updateTableOrder, clearTableOrder, getTableWithOrder,updateCheckTable, getIsPaidTable} from '../controllers/tableControllers.js'

const router = express.Router()

router.get('/id/:id',getTableById)
router.get('/zone/:zone',getTableByZone)
router.get('/cashier',getTableWithOrder)
router.get('/check',getIsPaidTable)
router.route('/update/:id').put(updateTableOrder)
router.route('/clear/:id').put(clearTableOrder)
router.route('/check/:id').put(updateCheckTable)



export default router