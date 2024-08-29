import express from 'express'
import bodyParser from 'body-parser'
import { orders } from '../model/index.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const orderRouter = express.Router()

orderRouter.use(bodyParser.json())
// verifyAToken,
orderRouter.get('/',  (req, res) => {
    orders.fetchOrders(req, res)
})

orderRouter.get('/recent', (req, res) => {
    orders.recentOrders(req, res)
})
// verifyAToken,
orderRouter.get('/:id', (req, res) => {
    orders.fetchOrder(req, res)
})
// verifyAToken,
orderRouter.post('/add', (req, res) => {
    orders.addOrder(req, res)
})
// verifyAToken,
orderRouter.patch('/:id', (req, res) => {
    orders.updateOrder(req, res)
})
// verifyAToken,
orderRouter.delete('/:id', (req, res) => {
    orders.deleteOrder(req, res)
})

export { orderRouter }