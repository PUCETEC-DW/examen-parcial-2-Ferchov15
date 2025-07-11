import { Router } from "express"
import taskcontroller from "../controllers/tareasController.js"

const router = Router()

router.get('/', taskcontroller.getAlltask)
router.post('/', taskcontroller.createtask)
router.put('/:id', taskcontroller.updatetask)
router.delete('/:id', taskcontroller.deleteTasks)
router.get('/summary', taskcontroller.getSummarytask)

export default router;


