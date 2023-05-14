const ordersModel = require('./orders.model');

module.exports = {
    query: {
        orders: () => {
            return ordersModel.getAllOrders();

        }
    }
}