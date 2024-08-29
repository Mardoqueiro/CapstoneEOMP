import express from 'express'
import bodyParser from 'body-parser'
import { cars } from '../model/index.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const carRouter = express.Router()

carRouter.use(bodyParser.json())
// verifyAToken,
carRouter.get('/',  (req, res) => {
    cars.fetchCars(req, res)
})

carRouter.get('/recent', (req, res) => {
    cars.recentCars(req, res)
})
// verifyAToken,
carRouter.get('/:id', (req, res) => {
    cars.fetchCar(req, res)
})
// verifyAToken,
carRouter.post('/add', (req, res) => {
    cars.addCar(req, res)
})
// verifyAToken,
carRouter.patch('/:id', (req, res) => {
    cars.updateCar(req, res)
})
// verifyAToken,
carRouter.delete('/:id', (req, res) => {
    cars.deleteCar(req, res)
})

export { carRouter }