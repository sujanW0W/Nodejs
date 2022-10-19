const express = require('express')
const router = express.Router();

const {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
                    } = require('../controllers/people')

//GET
router.get('/', getPeople)
//router.route('/').get(getPeople)

//POST
router.post('/postman', createPeople)

//PUT
router.put('/:id', updatePeople)

//DELETE
router.delete('/:id', deletePeople)

module.exports = router

/*

There is also another method of setting the routes.

    router.route('/').get(getPeople)
    router.route('/postman').post(createPeople)
    and so forth.

    This approach is useful when there are two apis having same path but different methods. (As we know, even if the paths are same, if method is different, then they are different requests.)

    For example, if there are two apis of different methods get and post with same path '/', then the routes can be set as follows:
    router.route('/').get(getPeople).post(createPeople)

    Simply, the path is compared then the method is compared.

*/