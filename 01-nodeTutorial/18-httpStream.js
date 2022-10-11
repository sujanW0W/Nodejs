//example of sending data in chuncks through http.

const http = require('http');
const fs = require('fs');

http
    .createServer( (req,res)=>{
        // const text = fs.readFileSync('./contents/bigFile.txt','utf8')
        // res.end(text)
        //By above method, the data is transferred as one character at a time. In header section of the network section in dev tool, we can see the content-lenght is equal to the size of the file.
        //With this method, the transfer of data is not so efficient as one character is sent at the time.

        //Better method is to send data in chuncks.
        const fileStream = fs.createReadStream('./contents/bigFile.txt','utf8')
        fileStream.on( 'open', ()=>{ 
            fileStream.pipe(res) //this pipe function attaches the write function to the read. This means as we can read in chunks, we can also write in chunks.
        })
        fileStream.on( 'error', (err)=>{
            res.end(err)
        })
    })

    .listen(5000);