import UserSchema from '../Schema/UserSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



class UserService {
    //создание пользователя регистрация
    async create(userData) {
        const { email, password } = userData // получаем нужные данные из req
        const candidate = await UserSchema.findOne({ email }) // ищем емаил в бд 
        //если емаил уже есть в бд
        if (candidate) {
            return {
                message: `Пользователь ${email} уже зарегистрирован`,
                resultCode: 1
            }
        }
        // если все хорошо 
        const hashPassword = await bcrypt.hash(password, 2) // шифруем пароль
        const user = new UserSchema({ email, password: hashPassword }) // передаем в схему обязательные поля
        await user.save() // сохраняем в бд
        return {
            email: user.email,
            password: userData.password, // возвращаем не хешированый пароль чтоб сразу использовать логин на фронте
            resultCode: 0
        };
    }
    // вход в аккаунт 
    async login(loginData) {
        const { email, password } = loginData

        const user = await UserSchema.findOne({ email }) // ищем пользователя с таким емайлом

        if (!user) {
            return {
                message: `Пользователь ${email} не найден`,
                resultCode: 1
            }
        }

        // сравниваем захешированный пароль с бд с введенным
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return {
                message: `Неверный пароль`,
                resultCode: 1
            }
        }

        //формируем токен 2 аргумент ключ 3 аргумент время жизни ключа "bla_bla"- используется в auth.middleware 
        const token = jwt.sign({ id: user.id }, "bla_bla", { expiresIn: "48h" })
        return {
            resultCode: 0,
            token,
            user: {
                id: user.id,
                email: user.email,
                basket: user.basket
            }
        }
    }
    //авто-вход
    async autoAuth(data) {
        try {
            const user = await UserSchema.findOne({ _id: data.user.id }) // ищем email пользователя в бд
            const token = jwt.sign({ id: user.id }, "bla_bla", { expiresIn: "48h" })// формируем новый токен
            return {  // возвращаем токен и необходимую информацию
                resultCode: 0,
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    basket: user.basket,
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export default new UserService();