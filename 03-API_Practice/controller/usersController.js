const {readFileSync, writeFileSync, writeFile} = require('fs');

const getUsers = (req, res) => {
    //GET
    const data = readFileSync('./data.json', "utf8");

    res 
        .status(200)
        .json(JSON.parse(data))
}

const createUsers = (req, res) => {
    //POST
    const data = req.body;
    
    const file = JSON.parse(readFileSync('./data.json', 'utf8'));
    file.push(data);
    writeFileSync('./data.json', JSON.stringify(file))

    res 
        .status(201)
        .json({success: true, data: data.name})
}

const updateUsers = (req, res) => {
    //PUT
    const {name} = req.params;
    const newName = req.body.name;

    const data = JSON.parse(readFileSync('./data.json','utf8'))
    const finding = data.find( person => {
        return person.name === name;
    })
    if(!finding)
        return res.status(401).json({success: false, data: name})
    
    const updatedData = data.map( person => {
        if(person.name === name)
            return {name: newName};
        return person
    })

    writeFileSync('./data.json', JSON.stringify(updatedData))

    res
        .status(200)
        .json({success: true, msg: "Updated"})
}

const deleteUsers = (req, res) => {
    //DELETE
    const {name} = req.params;
    const data = JSON.parse(readFileSync('./data.json','utf8'))

    const finding = data.find( person => {
        return person.name === name;
    })

    if(!finding)
        return res.status(401).json({success: false, msg : `${name} is not found.`})

    const updatedData = data.filter( person => {
        return person.name !== name
    })

    writeFileSync('./data.json', JSON.stringify(updatedData))

    res
        .status(200)
        .json({success: true, msg: `${name} is deleted.`})
}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}