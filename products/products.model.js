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

module.exports = {
    getAllProduct,
}