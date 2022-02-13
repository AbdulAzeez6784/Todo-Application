import React, { useState,useEffect } from "react";
import axios from "axios";

function PendingTasks() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState({});
  const getApi=()=>{
    setIsLoading(true)
    axios.get("http://localhost:5000/tasks").then((res)=>{
      console.log("inside the then of get");
      setTasks(res.data)
    }).catch((e)=>{
      console.log("inside the catch of get");
      setError(e.message)
    }).finally(()=>{
      console.log("inside the finally of get");
      setIsLoading(false)
    })
  }
  const completeHandler=(item)=>{
    setIsLoading(true)
    axios.put(`http://localhost:5000/tasks/${item.id}`,{...item, isCompleted:true, completedAt:Date()}).then(()=>{
      console.log("inside then of Put");
      getApi();
    }).catch((e)=>{
      console.log("inside catch  of Put");
      setError(e.message)
    }).finally(()=>{
      console.log("inside finally of Put");
      setIsLoading(false)
    })
  }
  const deleteHandler=(item)=>{
    setIsLoading(true)
    axios.delete(`http://localhost:5000/tasks/${item.id}`).then(()=>{
      console.log("inside then of Put");
      getApi();
    }).catch((e)=>{
      console.log("inside catch of Put");
      setError(e.message)
    }).finally(()=>{
      console.log("inside finally of Put");
      setIsLoading(true)
    })

  }
  useEffect(() => {
    getApi();
  },[]);
  return (
    <main className="main-pendingTask">
      {isLoading ? "...Loading" : error ? error : null}
      
        {tasks.length
          ? tasks.map((task, index) => ( task.isCompleted? null :
            <div key={index}><label>Title: <span>{task.title}</span></label><label>Created Time: <span>{task.createdAt}</span></label><label>Target Time: <span>{task.targetAt}</span></label><button style={{color:"green"}} onClick={()=>{completeHandler(task)}}>Complete</button><button style={{color:"Red"}} onClick={()=>{deleteHandler(task)}}>Delete</button></div>
            ))
          : null}
      
    </main>
  );
}

export default PendingTasks;
