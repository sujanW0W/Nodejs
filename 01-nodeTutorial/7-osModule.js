//Built-in Modules

//os-Moudle

const os = require('os')

//Info about the user

const user = os.userInfo()
// console.log(user);

//method that returns system's uptime in seconds.

const uptime = os.uptime()
// console.log(`The system's Uptime is ${uptime} seconds`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
}

console.log(currentOs);