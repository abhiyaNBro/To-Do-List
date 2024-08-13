import {useState} from 'react'

function ToDoList(){

    const[tasks, setTask] = useState([]);


    function handelAddTask(){
        
        const newTask = document.querySelector("#inputTasks").value;
        document.querySelector("#inputTasks").value = "";
        if(newTask.trim() !== ""){

            setTask(t=> [...t, newTask]);
        }


    }

    function handelDeleteTask(index){
        setTask(tasks.filter((_,i)=> i!== index));

    }

    function handelUpButton(index){
        if (index > 0) {
            const newTask  = [...tasks];
            let temp = newTask[index - 1];
            newTask[index - 1] = newTask[index];
            newTask[index] = temp;
            setTask(newTask);

        }
    }

    function handelDownButton(index){

        if (index < tasks.length -1 ) {
            const newTask  = [...tasks];
            let temp = newTask[index + 1];
            newTask[index + 1] = newTask[index];
            newTask[index] = temp;
            setTask(newTask);
            
        }
        
    }


    return(<>
    <div className='to-do-container'>

        <h1>To-Do-List</h1>
        <input  id='inputTasks' type="text" placeholder='add some tasks...' />
        <button className='add-button'  onClick={handelAddTask}>Add Task</button>

        <ul>

           {tasks.map((task,index)=>

                    <li className='listItem' key={index}  >
                        <span className='text'>{task}</span>
                        
                        
                         <button className='delete-btn'  onClick={()=>handelDeleteTask(index)}>Delete</button>
                         <button className='up-btn' onClick={()=> handelUpButton(index)}>⬆️</button>
                          <button className='down-btn' onClick={() => handelDownButton(index)}>⬇️</button>
                    </li>

           )}

        </ul>


    </div>
    </>);
}

export default ToDoList;
