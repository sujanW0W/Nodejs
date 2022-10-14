//Router Params and query string.

const express = require('express')
const app = express();

const data = require('./data.js')

app.get('/', (req,res)=>{
    res.send(
        "<h1>Products Page</h1> <a href='/api/products'>Products</a>"
    )
})

app.get('/api/products', (req,res)=>{
    const productsDetails = data.products.map(
        ( item) => {
            const {id,name,price} = item;
            // return(
            //     {
            //         id: id,
            //         name : name,
            //         price : price
            //     }
            // )

            return{id,name,price}
        }
    )
    res.json(productsDetails)
})

//Router Params
// :[variable or key]
app.get('/api/products/:productID', (req,res) => {
    // console.log(req.params)
    const {productID} = req.params;
    
    const singleProduct = data.products.find( 
        (product) => product.id === Number(productID)
    );

    if(!singleProduct)
        res.status(404).send("Product does not exist")    

    res.json(singleProduct)
        
})

//Query String

app.get('/api/v1/query', (req,res) => {
    // const query = req.query;
    // console.log(query)
    // res.send("Hello World")

    let sortedList = [...data.products];

    const query = req.query;
    const {name,limit} = query;

    if(name){
        sortedList = sortedList.filter( item => {
            return item.name.startsWith(name)
        })
    }
    
    if(limit){
        sortedList = sortedList.slice(0, Number(limit));
    }

    if(sortedList.length < 1){
        return res.status(200).json(
            {status: 200, data : 'No products found'}
        )
    }
        res.status(200).json(sortedList)
 

})

app.listen( 5000, () => {
    console.log("Server is listening on port 5000.....")
})


//Basically, if any specific item is requested with the id in the URL, the product with that id is sent to the client.
//If we manually try to match the id by hard-coding the id then it wont make proper sense with large dataset.
//For making it dynamic, express has an a feature that is "Route params" that is and object "params", this is an object that stores params.
//For including some params in the object, we have to specify in the URL by using ':[variableName]' like above.
//Now, the params object store it in key-value pair and the value is in string.
//If the id is in number, dont forget to convert the value into Number as done above.
//Also, if the entered id does not match with any IDs in the dataset, remember to notify the client with 404 status.


//Basically, query string is a string that is a part of URL, that is in key-value format, basically after the '?' and the pairs are separated by '&'
//Like params, it get some particular value, query string gets all the key values in the URL.
//Simply, we provide a part of the URL, then the query string gets all the remaining string and stores them in a object 'query', similary to the params.
//Like in params, the values are String.