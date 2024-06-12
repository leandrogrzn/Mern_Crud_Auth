import { Router } from "express"
import { authRequire } from "../middlewares/validateToken.js"
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js"
import { createTaskSchema } from "../schemas/task.schema.js"
import { validateSchema } from "../middlewares/validator.middleware.js"

const router = Router()

router.get('/tasks', authRequire, getTasks)
router.get('/tasks/:id', authRequire, getTask)
router.post('/tasks', authRequire, validateSchema(createTaskSchema), createTask)
router.delete('/tasks/:id', authRequire, deleteTask)
router.put('/tasks/:id', authRequire, updateTask)

export default router