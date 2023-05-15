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
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price)
        },
        addNewProductReview: (_, args) => {
            productsModel.addNewProductReview(args.id, args.rating, args.comment)
        }
    }
};