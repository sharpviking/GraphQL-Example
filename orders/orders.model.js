const orders = [
    {
        date: '2005-05-05',
        subtotal: 90.22,
        items: [{
            product: {
                id: 'blueshoe',
                description: 'Old Blue shoe',
                price: 47.11,
            },
            quantity: 2,
        }

        ]
    }
]

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
}