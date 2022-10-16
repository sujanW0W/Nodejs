//Just an example of authorize. (Not actual way of authorizing)

const authorize = (req, res, next) => {
    console.log("Authorize");

    const { user } = req.query; //req.query ko object should have a variable named 'user'.
    

    if(user === 'sujan'){
        req.user = {name: user, id: 37}
    }
    else{
        res.send(401).send("Unauthorize")
    }

    next();
}

module.exports = authorize

//Basically, some values are collected from the query string.
//This example suppose that the query string contains the username.
//If the username founds, the username is stored and this means the user is Authorized.
//If the username is not found, the user is assumend to be unAuthorized.

//For now, I learnt one way of sending the information from this file to other file that is importing this module.
//Write the data in 'req' object, as the 'req' object can be accessed by other module as well.