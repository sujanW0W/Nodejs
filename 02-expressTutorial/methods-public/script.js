//Get data

const result = document.getElementById('result')

const fetchData = async () => {
    try{
        const {data} = await axios.get('api/people')

        const people = data.map( item => {
            return `<h2>${item.name}</h2>`
        })
        result.innerHTML = people.join('')
    }
    catch(error){
        result.innerHTML = "<h2>Can not fetch Data</h2>"
    }
}

fetchData()

//Submit Form data

const btn = document.querySelector('.submitBtn');
const input = document.getElementById('nameSection');

btn.addEventListener( 'click', async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    try {
        const data = await axios.post('/login/js', {name: nameValue}) //data is assigned with the response
        console.log(data)
        
    } catch (error) {
        console.log('Error')
    }
})