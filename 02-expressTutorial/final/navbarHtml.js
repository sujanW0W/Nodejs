//http basics

const http = require('http')

const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer( (req,res) => {
    // console.log(req.url)
    const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200,{"content-type" : "text/html"})

        res.write(homePage);
        res.end();
    }
    //styles
    else if(url === "/styles.css"){
        res.writeHead(200,{"content-type" : "text/css"})
        res.write(homeStyle)
        res.end();
    }
    //Logo
    else if(url === "/logo.svg"){
        res.writeHead(200,{"content-type" : "image/svg+xml"})
        res.write(homeLogo)
        res.end();
    }
    //javascript
    else if(url === "/browser-app.js"){
        res.writeHead(200,{"content-type" : "text/javascript"})
        res.write(homeLogic)
        res.end();
    }
    //about
    else if(url === "/about"){
        res.writeHead(200,{"content-type" : "text/html"})
        res.write("<h1>About</h1>")
        res.end();
    }

    //otherwise
    else{
        res.writeHead(404,{"content-type": "text/plain"})
        res.write("Page not Found")
        res.end()
    }
    
})

server.listen(5000)