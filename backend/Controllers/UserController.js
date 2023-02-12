import UserService from '../Service/UserService.js'



class UserController {
    //регистация
    async create(req, res) {
        try {
            const userData = await UserService.create(req.body)
            res.status(200).json(userData)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    //логинизация
    async login(req, res) {
        try {
            const loginData = await UserService.login(req.body)
            res.json(loginData)
        } catch (e) {
            res.status(500).json(e.message)
            
        }
    }
    //авто-логинизация
    async autoAuth(req, res) {
        try {
            const autoAuth = await UserService.autoAuth(req)
            res.json(autoAuth)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async setBasket(req, res) {
        try {
            const basket = await UserService.setBasket(req.body)
            res.json(basket)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async syncLocalAndServerBasketUser(req, res) {
        try {
            const basket = await UserService.syncLocalAndServerBasketUser(req.body)
            res.json(basket)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new UserController()