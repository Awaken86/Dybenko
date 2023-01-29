import jwt from "jsonwebtoken";


const authMiddleware = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token || token === null) {
            console.log("no token")
            return res.status(401).json({ message: "Auth error", resultCode: 1 })
        }
        // "bla_bla" - ключ используется ещё в UserService 
        const decoded = jwt.verify(token, "bla_bla")
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({ message: e, resultCode: 1 })

    }
}

export default authMiddleware