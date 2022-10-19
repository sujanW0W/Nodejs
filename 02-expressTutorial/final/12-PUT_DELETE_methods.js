const express = require('express')
const app = express()

app.use(express.urlencoded({encoded: false}))
app.use(express.json())

const {people} = require('./data')


app.post('/api/postman/people', (req,res) => {
    const {name} = req.body;

    if(name)
        return res.status(201).json({success : true, data: name})
    res.status(401).json({success: false})
})

//PUT
app.put('/api/people/:id', (req, res) => {
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

})

//DELETE
app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params;

    const person = people.find( person => person.id === Number(id))
    if( !person )
        return res.status(404).json({success: false, msg: "Please provide Valid credentials"})

    const newPeople = people.filter( person => person.id !== Number(id))

    return res.status(200).json({success: true, msg: `Deleted with id: ${id}`,newPeople})

})

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})