import { Router } from 'express'
import demandController from '../controllers/demandController'

const router = Router()

router.post('/insert', demandController.createDemand)
router.get('/show', demandController.showDemand)
router.patch('/update/:id', demandController.updateDemand)

export default router