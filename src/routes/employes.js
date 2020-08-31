import { Router } from 'express'

import { createEmploye, getEmployes, getOneEmploye, deleteEmploye, updateEmploye, createTest } from '../controllers/project.controller'

const router = Router()

router.post('/', createEmploye)
router.get('/', getEmployes)
router.get('/:id', getOneEmploye)
router.delete('/:id', deleteEmploye)
router.put('/:id', updateEmploye)

export default router