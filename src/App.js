import React from 'react';
import './app.css';

import {useState} from 'react'
function App() {
  let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  let dayname=days[new Date().getDay()]
const [ToDos,setTodos]=useState([])
const [Todo,SetTodos]=useState('')
  return (<div className="app2">
    <div className="todos-pendingheading">
      <div className="subHeading">
      <br />
      <h2 style={{color:'red'}}>Task pending</h2>
    </div>
   
</div>
<div className="todos-finishedheading">
      <div className="subHeading">
      <br />
      <h2 style={{color:'green'}}>Task finished</h2>
    </div>
   
</div>

       {ToDos.map((fobj,index1)=>{
if(fobj.status===true){
  return(
  <div className="todos-finished" key={index1} >
 
    <div className="todo">
      <div className="todo-left">
        
        <p>{fobj.text}</p>
      </div>
      <div className="todo-right">
        <i className="fas fa-times"></i>
      </div>
    </div>
  </div>
       )}
       })}
   
{ToDos.map((pobj,index)=>{
  
  if(pobj.status===false){
   
    return( <div className="todos-pending" key={index}>
   
  <div className="todo">
    <div className="todo-left">
      <input value={pobj.status} onChange={(e)=>{
        setTodos(ToDos.filter((pobj2)=>{
          if(pobj2.id===pobj.id){
            pobj2.status=true
          }return pobj2
        }))}} type="checkbox" name="" id="" />
      <p>{pobj.text}</p>
    </div>
    <div className="todo-right">
      <i className="fas fa-times"></i>
    </div>
  </div>
</div>)
  }
      })}

    <div className="app">
 
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayname} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={Todo} onChange={(e)=>SetTodos(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>setTodos([...ToDos,{id:new Date(),text:Todo,status:false}])}></i>
      </div>
      
    </div>
    </div>
  );

  
            
  

  
   
 
}

export default App;
