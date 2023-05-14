const productsModel = require('./products.model')

module.exports = {
    query: {
        products: () => {
            return productsModel.getAllProducts();

        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.min, args.max)
        },
        product: (_, args) => {
            return productsModel.getAllProductById(args.id);
        }
    }
};