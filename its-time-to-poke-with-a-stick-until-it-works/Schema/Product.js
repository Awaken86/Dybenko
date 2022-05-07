import mongoose from "mongoose";

const Product = new mongoose.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
    color: { type: String, required: true },
    cssColor: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String }
})

export default mongoose.model('Product', Product);