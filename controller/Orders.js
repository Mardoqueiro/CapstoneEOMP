import express from 'express'
import bodyParser from 'body-parser'
import { orders } from '../model/index.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const orderRouter = express.Router()

orderRouter.use(bodyParser.json())
// verifyAToken,
orderRouter.get('/',  (req, res) => {
    orders.fetchorders(req, res)
})

orderRouter.get('/recent', (req, res) => {
    orders.recentorders(req, res)
})
// verifyAToken,
orderRouter.get('/:id', (req, res) => {
    orders.fetchorder(req, res)
})
// verifyAToken,
orderRouter.post('/add', (req, res) => {
    orders.addorder(req, res)
})
// verifyAToken,
orderRouter.patch('/:id', (req, res) => {
    orders.updateorder(req, res)
})
// verifyAToken,
orderRouter.delete('/:id', (req, res) => {
    orders.deleteorder(req, res)
})

export { orderRouter }