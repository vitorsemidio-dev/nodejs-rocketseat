const mongoose = require('mongoose');


const Product = mongoose.model('Product');


module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },

    async show(req, res) {
        const { id } = req.params;
        const product = await Product.findById(id);

        return res.json(product);
    },

    async store(req, res) {
        const { body } = req;
        const product = await Product.create(body);

        return res.json(product);
    },

    async update(req, res) {
        const { params, body } = req;
        const { id } = params;
        const returnProductUpdated = { new: true };
        const product = await Product.findByIdAndUpdate(id, body, returnProductUpdated);

        return res.json(product);
    },

    async destroy(req, res) {
        const { id } = req.params;
        await Product.findByIdAndRemove(id);

        return res.send();
    },
}
