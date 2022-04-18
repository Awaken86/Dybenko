import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js';


const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.1okoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.get('/', (req, res) => {
    res.status(200).json('Сервер робит')
})
async function startApp(){
    try {
        mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server started on port:' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()