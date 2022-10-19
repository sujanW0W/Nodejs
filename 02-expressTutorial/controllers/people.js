const {people} = require('../data')

const getPeople = (req,res) => {
    res.status(200).json({success: true, data: people})
}

const createPeople = (req,res) => {
    const {name} = req.body;

    if(name)
        return res.status(201).json({success : true, data: name})
    res.status(401).json({success: false})
}

const updatePeople = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find( (person) => person.id === Number(id))
    if(!person) 
        return res.status(404).json({success: false})
    
    const newPeople = people.map( person => {
        if(person.id === Number(id))
            person.name = name;
        return person;
    })
    res.status(200).json(newPeople)

}

const deletePeople = (req, res) => {
    const {id} = req.params;

    const person = people.find( person => person.id === Number(id))
    if( !person )
        return res.status(404).json({success: false, msg: "Please provide Valid credentials"})

    const newPeople = people.filter( person => person.id !== Number(id))

    return res.status(200).json({success: true, msg: `Deleted with id: ${id}`,newPeople})

}

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
}