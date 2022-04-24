import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
import fileUpload from 'express-fileupload';
import cors from './middleware/cors.middleware.js';


export default cors
const PORT = 3001
const DB_URL = `mongodb+srv://user:user@cluster0.1okoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(cors)
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload())
app.use('/api', router)

async function startApp() {
    try {
        mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('Server started on port:' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()