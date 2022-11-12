import { Router } from "express";
import ProductController from './Controllers/ProductController.js'
import UserController from "./Controllers/UserController.js";
import authMiddleware from "./middleware/auth.middleware.js";

const router = new Router()

router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:id', ProductController.getOne)
router.put('/product/:id', ProductController.update)
router.delete('/product/:id', ProductController.delete)


router.post('/createUser', UserController.create)
router.post('/login', UserController.login)
router.get('/autoAuth', authMiddleware, UserController.autoAuth)

export default router