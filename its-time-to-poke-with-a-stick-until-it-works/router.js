import { Router } from "express";
import ProductController from './Controllers/ProductController.js'
import UserController from "./Controllers/UserController.js";

const router = new Router()

router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:id', ProductController.getOne)
router.put('/product/:id', ProductController.update)
router.delete('/product/:id', ProductController.delete)


router.post('/createUser', UserController.create)
router.post('/login', UserController.login)

export default router