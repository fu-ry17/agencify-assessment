import express from "express"
import customerCtrl from "../controllers/customerCtrl"

const router = express.Router()

router.get('/health-check', customerCtrl.healthCheck)

router.get('/customers', customerCtrl.getCustomers)

export default router