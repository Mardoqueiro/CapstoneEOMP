import express from 'express'
import bodyParser from 'body-parser'
import { cars } from '../model/index.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const carRouter = express.Router()

carRouter.use(bodyParser.json())
// verifyAToken,
carRouter.get('/',  (req, res) => {
    cars.fetchcars(req, res)
})

carRouter.get('/recent', (req, res) => {
    cars.recentcars(req, res)
})
// verifyAToken,
carRouter.get('/:id', (req, res) => {
    cars.fetchcar(req, res)
})
// verifyAToken,
carRouter.post('/add', (req, res) => {
    cars.addcar(req, res)
})
// verifyAToken,
carRouter.patch('/:id', (req, res) => {
    cars.updatecar(req, res)
})
// verifyAToken,
carRouter.delete('/:id', (req, res) => {
    cars.deletecar(req, res)
})

export { carRouter }