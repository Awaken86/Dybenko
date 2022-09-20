import Product from "../Schema/Product.js";
import FileService from "./FileService.js";


class ProductService {
    async create(product, picture) {
        const fileName = FileService.saveFile(picture)
        const createdProduct = await Product.create({ ...product, picture: fileName })
        return createdProduct
    }
    async getAll(data) {
        //cringe
        let products
        if (data.color !== 'withoutFilter') {
            products = await Product.find({ type: data.type, color: data.color })
        } else {
            products = await Product.find({ type: data.type })
            
        }
        return products
    }
    // async getAll(data) {
    //     const products = await Product.find({
    //         type: { $all: data.type },
    //         color:{}
    //     })
    //     console.log(data)
    //     return products
    // }
    async getOne(id) {
        if (!id) {
            throw new Error('нет Id')
        }
        const product = await Product.findById(id);
        return product
    }
    async update(product) {
        if (!product._id) {
            throw new Error('нет Id')
        }
        const updateProduct = await Product.findByIdAndUpdate(product._id, product, { new: true })
        return updateProduct
    }
    async delete(id) {
        if (!id) {
            throw new Error('нет Id')
        }
        const product = await Product.findByIdAndDelete(id);
        return product
    }
}
export default new ProductService()