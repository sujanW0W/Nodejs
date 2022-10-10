
const http = require('http')

// const server = http.createServer( (req,res) => {
//     res.end("Welcome");
// })

//The http module extends the EventEmitter class.
//So, the on and emit functions can be used in http module too.

//Like above, the server can be created with the use of EventEmitter.

const server = http.createServer();
//emit request event
//subscibe to it/ listen to it/ respond to it.

server.on('request', (req,res) => {
    res.end("Hello World")
})

server.listen(5000)