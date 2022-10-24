import ProductService from "../Service/ProductService.js";


class ProductController {
    async create(req, res) {
        try {
            console.log(req)
            const product = await ProductService.create(req.body)
            return res.json(product);
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const products = await ProductService.getAll(req.query);
            return res.json(products);
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