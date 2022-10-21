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
    res.status(200).send("PUT SUCCESS")

}

const deleteUsers = (req, res) => {
    //DELETE
    res.status(200).send("DELETE SUCCESS")

}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}