//http basics

const http = require('http')

const server = http.createServer( (req,res) => {
    // console.log(req.url)
    const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200,{"content-type" : "text/html"})

        res.write("<h1>Home Page</h1>")
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

//res.end() is the method that tells the browser that the response is completed. It MUST be included in every responses.

//Port is the communication end-point. Different port is used for different specific taks. (Search for it). But, for development phase, an arbitary port can be used, like here 5000.

//Header provides information about the content of the response. It is meta-data. res.writeHead() is the function that sends the response header. 
//status code is specifies some information. (Search)
//header indicates the content-type. Now, the content-type is crucial as the browser interprets the content of the response according to the content-type specified. (Check out MIME types- simply media types)