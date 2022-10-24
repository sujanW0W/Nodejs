//GET data

const result = document.getElementById('result')

const btn = document.querySelector('.submitBtn');
const input = document.getElementById('nameSection');

const getBtn = document.querySelector('.getBtn')
const updateBtn = document.querySelector('.updateBtn')
const deleteBtn = document.querySelector('.deleteBtn')

const fetchData = async () => {
    try{
        const {data} = await axios.get('api/users')
        const users = data.map( user => {
            return `<h2>name: ${user.name}</h2> &nbsp;`
        })
        result.innerHTML = users

    }
    catch(error){
        result.innerHTML = "<h2>Can not fetch Data</h2>"
    }
}

getBtn.addEventListener( 'click', (e) => {
    e.preventDefault()
    fetchData();
})

//POST data


btn.addEventListener( 'click', async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    try {
        const {data} = await axios.post('/api/users', {name: nameValue}) //data is assigned with the response
        result.innerHTML = ""
        for(const response in data){
            result.innerHTML += `<h2>${response}: ${data[response]}, </h2>`
        }
        
    } catch (error) {
        result.innerHTML = "Error"
    }
})

//PUT

updateBtn.addEventListener( 'click', async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    try{
        const {data} = await axios.put(`api/users/resarch`,{name: nameValue}) //need a different field for the params value. "What is to be changed?"
        result.innerHTML = ""
        for(const response in data){
            result.innerHTML += `<h2>${response}: ${data[response]}</h2>`
        }
    }
    catch(error){
        result.innerHTML = "ERROR"
    }
})

//DELETE

deleteBtn.addEventListener( 'click', async (e) => {
    e.preventDefault();
    const name = input.value;
    try {
        const {data} = await axios.delete(`api/users/${name}`);
        result.innerHTML = ""
        for(const response in data){
            result.innerHTML += `<h2>${response}: ${data[response]}</h2>`
        }

    } catch (error) {
        result.innerHTML = "ERROR"
    }
})