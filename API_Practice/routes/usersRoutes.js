const express = require('express')
const router = express.Router();

const {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
                    } = require('../controller/usersController')

router.get('/', getUsers)

router.post('/', createUsers)

router.put('/:name', updateUsers)

router.delete('/:name', deleteUsers)

module.exports = router;