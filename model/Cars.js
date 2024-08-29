import { connection as db } from '../config/index.js'

class Cars {
    fetchCars(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, quantity, amount, category, prodUrl
            FROM Cars;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all Cars')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    recentCars(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, quantity, amount, category, prodUrl
            FROM Cars
            ORDER BY prodID DESC
            LIMIT 5;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve recent Cars')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    fetchCar(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, quantity, amount, category, prodUrl
            FROM Cars
            WHERE prodID = ${req.params.id};
            `
            db.query(strQry, (err, result) => { 
                if (err) throw new Error('Unable to retrieve a Car')
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    addCar(req, res) { 
        try {
            const strQry = `
            INSERT INTO Cars
            SET ?
            `
            db.query(strQry, [req.body], (err) => { 
                if (err) throw new Error('Unable to add a new Car')
                res.json({
                    status: res.statusCode,
                    msg: 'Car was added'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
         }
    }

    updateCar(req, res) { 
        try {
            const strQry = `
            UPDATE Cars
            SET ?
            WHERE prodID = ${req.params.id};
            `
            db.query(strQry, [req.body], (err) => { 
                if (err) throw new Error(err.message)
                res.json({
                    status: res.statusCode,
                    msg: 'Car was updated.'
                })
            })
        } catch (e) { 
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    deleteCar(req, res) { 
        try {
            const strQry = `
            DELETE FROM Cars
            WHERE prodID = ${req.params.id};
            `
            db.query(strQry, (err) => { 
                if (err) throw new Error('Unable to delete a Car')
                res.json({
                    status: res.statusCode,
                    msg: 'A Car was removed.'
                })
            })
        } catch (e) { 
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    
}

export { Cars }