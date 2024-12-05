const pool = require('../db')

class UserController {
    async getAllUsers(req,res) {
        try {
            const user = await pool.query(`Select * FROM users`)
            res.json(user.rows)
        } catch(e) {
            console.log(e)
        }
    }

    async createUser(req, res) {
        const {name, email} = req.body
        try {
            const user = await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`, [name, email])
            res.json(user.rows)
        } catch(e) {
            console.log(e)
        }
    }

    async updateUser(req, res) {
        const id = parseInt(req.params.id, 10)
        const {name, email} = req.body
        try {
            const user = await pool.query(`UPDATE users SET name = $1, email = $2 WHERE id =$3 RETURNING *`, [name, email, id])
            res.json(user.rows)
        } catch(e) {
            console.log(e)
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await pool.query(`DELETE FROM users WHERE id = $1`, [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()