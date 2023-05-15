const products = [
    {
        id: 'blueShoe',
        description: 'Blue Shoe',
        price: 43.99,
        reviews: []
    },
    {
        id: 'bluejeans',
        description: 'Blue Jeans',
        price: 55.55,
        reviews: []
    }
];

function getAllProduct() {
    return products
}

function getProductsByPrice(min, max) {
    products.filter((product) => {
        return product.price >= min && product.price <= max;
    })
}

function getProductsById(id) {
    return products.find((product) => {
        return product.id === id;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, cooment) {
    const matchedProduct = getProductById(id);

    if (matchedProduct) {
        const newProductReview = {
            rating,
            comment,

        };

        matchedProduct.reviews.push(newProductReview)



    }

    return newProductReview

}

module.exports = {
    getAllProduct,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
}