const express = require('express')
const app = express()

app.use(express.static('./public')) 

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
//adding to the static assets
//SSR

app.all('*', (req,res) => {
    res.status(404).send('Resource Not Found.')
})

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000.....");
})



//Mind Grenade: Isn't html also a static asset?
//Answer is YES. 
//html is also a static asset, so for simple sites, all the assets like html, css, js, images, etc can be kept in public folder and use method handles them all.
//index.html is served as root by browser. So no need to do anything extra.