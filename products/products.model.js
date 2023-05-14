const products = [
    {
        id: 'blueShoe',
        description: 'Blue Shoe',
        price: 43.99,
    },
    {
        id: 'bluejeans',
        description: 'Blue Jeans',
        price: 55.55,
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

module.exports = {
    getAllProduct,
    getProductsByPrice,
}