import { Router } from "express";
import PostController from './Controllers/PostController.js'
import ProductController from './Controllers/ProductController.js'

const router = new Router()

router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:id', ProductController.getOne)
router.put('/product/:id', ProductController.update)
router.delete('/product/:id', ProductController.delete)

export default router