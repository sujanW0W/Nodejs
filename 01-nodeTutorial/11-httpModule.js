//http module

const http = require('http')

const server = http.createServer(
    (req,res)=>{
        if(req.url == '/'){
            res.end('Welcome to the Homepage.') //this is similar to res.write("...") and then res.end()
        }
        else if(req.url == '/about'){
            res.end("Welcome to the About page.")
        }

        else{
            res.end(`
                <h1>Oops!</h1>
                <p>We can not find the requested page.</p>
                <a href='/'>Go to Homepage</a>
            `);
        }
    }

    
    )

server.listen(5000)