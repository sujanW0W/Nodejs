import {useEffect, useState} from 'react';
import axios from 'axios'
import './mainBody.css'

const MainBody = () => {

    const submitted = () =>{
        console.log("Submitted");
    }

    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        async function fetchData(){
            try{
                const tasks = await axios.get("https://localhost:5000/api/v1/tasks")
                setTasks(tasks)
            }
            catch(error){
                console.log(error);
            }
        }

        fetchData();
    }, [])


    return(
        <section className="mainSection">
            <section className="inputArea">
                <input type="text" id="inputText" />
                <button className="submit" onClick={submitted}>Submit</button>
            </section>
            <hr />
            <section className="tasksArea">
                <h2>Tasks</h2>
                {
                   "Loading..." 
                }
            </section>
        </section>
    )
}

export default MainBody