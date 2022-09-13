import ProductService from "../Service/ProductService.js";

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
class ProductController {
    async create(req, res) {
        try {
            console.log(req)
            const product = await ProductService.create(req.body, req.files.picture)
            return res.json(product);
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const products = await ProductService.getAll(req.query);
            const maxPrice = MaxPrice(products)
            const minPrice = MinPrice(products)
            
            const objRes = {
                products: products,
                maxPrice: maxPrice,
                minPrice: minPrice
            }
            return res.json(objRes);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const product = await ProductService.getOne(req.params.id);
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updateProduct = await ProductService.update(req.body)
            return res.json(updateProduct)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const product = await ProductService.delete(req.params.id);
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new ProductController();