import { connection as db } from '../config/index.js';

class Orders {
    // Fetch all orders
    fetchOrders(req, res) {
        try {
            const strQry = `
                SELECT orderID, userID, totalAmount, orderStatus, paymentStatus, shippingAddress
                FROM Orders;
            `;
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Issue when retrieving all orders.');
                res.json({
                    status: res.statusCode,
                    results
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            });
        }
    }

    // Fetch a specific order by ID
    fetchOrder(req, res) {
        try {
            const strQry = `
                SELECT orderID, userID, totalAmount, orderStatus, paymentStatus, shippingAddress
                FROM Orders
                WHERE orderID = ${req.params.id};
            `;
            db.query(strQry, (err, result) => {
                if (err) throw new Error('Issue when retrieving the order.');
                res.json({
                    status: res.statusCode,
                    result: result[0]
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: 'Please try again later.'
            });
        }
    }

    // Create a new order
    createOrder(req, res) {
        try {
            const data = req.body;
            const strQry = `
                INSERT INTO Orders (userID, totalAmount, orderStatus, paymentStatus, shippingAddress)
                VALUES (?, ?, ?, ?, ?);
            `;
            db.query(strQry, [data.userID, data.totalAmount, data.orderStatus, data.paymentStatus, data.shippingAddress], (err, result) => {
                if (err) {
                    res.json({
                        status: 400,
                        msg: 'Failed to create an order.'
                    });
                } else {
                    res.json({
                        status: res.statusCode,
                        msg: 'Order created successfully.',
                        orderID: result.insertId
                    });
                }
            });
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            });
        }
    }

    // Update an existing order by ID
    updateOrder(req, res) {
        try {
            const data = req.body;
            const strQry = `
                UPDATE Orders
                SET userID = ?, totalAmount = ?, orderStatus = ?, paymentStatus = ?, shippingAddress = ?
                WHERE orderID = ${req.params.id};
            `;
            db.query(strQry, [data.userID, data.totalAmount, data.orderStatus, data.paymentStatus, data.shippingAddress], (err) => {
                if (err) throw new Error('Unable to update the order.');
                res.json({
                    status: res.statusCode,
                    msg: 'The order record was updated.'
                });
            });
        } catch (e) {
            res.json({
                status: 400,
                err: e.message
            });
        }
    }

    // Delete an order by ID
    deleteOrder(req, res) {
        try {
            const strQry = `
                DELETE FROM Orders
                WHERE orderID = ${req.params.id};
            `;
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete the order.');
                res.json({
                    status: res.statusCode,
                    msg: 'The order was removed.'
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            });
        }
    }
}

export { Orders };