import Product from "../Schema/Product.js";
import FileService from "./FileService.js";

const MaxPrice = (products) => {
    let maxPrice = products.reduce((prev, cur) => {
        if (prev.price > cur.price) {
            return prev
        }
        return cur
    })
    return maxPrice.price
}
const MinPrice = (products) => {
    let minPrice = products.reduce((prev, cur) => {
        if (prev.price < cur.price) {
            return prev
        }
        return cur
    })
    return minPrice.price
}

class ProductService {
    async create(product, picture) {
        const fileName = FileService.saveFile(picture)
        const createdProduct = await Product.create({ ...product, picture: fileName })
        return createdProduct
    }
    async getAll(data) {
        //cringe
        let products = await Product.find({ type: data.type })
        let maxPrice = MaxPrice(products)
        let minPrice = MinPrice(products)
        let maxSelected = data.maxSelected
        let minSelected = data.minSelected
        
        //фильтр по цвету 
        if (data.color !== 'withoutFilter') {
            products = products.filter((prod) => {
                return prod.color === data.color
            })
        }
        //фильтр по цене
        if (maxSelected < maxPrice || minSelected > minPrice) {
            products = products.filter((prod) => {
                return prod.price <= maxSelected && prod.price >= minSelected
            })
        }
        const objProdMinPrMaxPr = {
            products: products,
            maxPrice: maxPrice,
            minPrice: minPrice
        }
        return objProdMinPrMaxPr
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