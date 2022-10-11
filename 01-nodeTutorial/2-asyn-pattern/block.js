const http = require("http")

const server = http.createServer(
    (req,res)=>{
        if(req.url === '/'){
            res.end("Home Page")
        }
        if(req.url === '/about'){

            //Blocking Code
            for(let i=0; i< 1000; i++){
                for(let j=0; j<100; j++)
                    console.log(`${i} ${j}`)
            }

            res.end("About Page")
        }
        else{
            res.end("Error")
        }
    }
);

server.listen(5000, () => {
    console.log("Server is listening on port 5000 ...")
})

//This blocking code is introduced.
//As we know the JS is synchronous, the for loops get executed and only after its completion, the res.end() gets executed.
//As the for loop takes some time to complete, the about page will not get the response until for loop is finished.
//Now, Not only the about page get affected(does not load), also other pages like homepage also gets affected and does not load.

//So, the blocking code affects all the pages or actually all the users.