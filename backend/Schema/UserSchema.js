import mongoose from "mongoose";

const User = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordValid: { type: String },
    basket: [{
        countItem: { type: Number },
        id: { type: String },
        count: { type: Number },
        price: { type: Number },
        picture: { type: String },
        title: { type: String },
        forPayment: { type: Boolean }
    }]
})

export default mongoose.model('User', User);