import { useState } from 'react';
import  './index.css'

function ToDoList(){
  const[task,setTask]=useState([]);
  const [newTask, setNewTask]=useState("");
   function handleInputChange(e){
     setNewTask(e.target.value);
   }
   function addTask(){
       setTask(t=>[...t,newTask]);
      // setTask([...task,newTask])
      
   }
   function deleteTask(index){
         const updatedTask=task.filter((_,i)=> i!==index);
         setTask(updatedTask);
   }


  return (
    
    <div className='to-do-list'>
    <h1>TO-DO List</h1>
    <div>
      <input type="text"  placeholder='enter task' value={newTask} onChange={handleInputChange}/>
      <button className='add-button' onClick={addTask}> add</button>
    </div>
    <ol>
      {task.map((task,index)=>
       <li key={index}>
        <span className='text'>{task}</span>
        <button onClick={()=>deleteTask(index)}>delete</button>
       </li>
      )}
    </ol>
    </div>
  );
}
export default ToDoList;