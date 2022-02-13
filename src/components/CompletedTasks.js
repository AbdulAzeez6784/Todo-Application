import React,{useState,useEffect} from 'react';
import axios from 'axios';


function CompletedTasks() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState({});
  const getApi=()=>{
    setIsLoading(true)
    axios.get("http://localhost:5000/tasks").then((res)=>{
      setTasks(res.data)
    }).catch((e)=>{
      setError(e.message)
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  const deleteHandler=(item)=>{
    setIsLoading(true)
    axios.delete(`http://localhost:5000/tasks/${item.id}`).then(()=>{
      getApi();
    }).catch((e)=>{
      setError(e.message)
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  useEffect(() => {
    getApi();
  },[]);
  return (<main className='main-completed'>
      {isLoading ? "...Loading" : error ? error : null}
      
        {tasks.length
          ? tasks.map((task,index) => ( task.isCompleted?
              
                <div key={index}><label>Title: <span style={{color:"green"}}>{task.title}</span></label><label>Created Time: <span style={{color:"blue"}}>{task.createdAt}</span></label><label>Target Time: <span style={{color:"blue"}}>{task.targetAt}</span></label><label>Completed Time: <span style={{color:"blue"}}>{task.completedAt}</span></label><button onClick={()=>{deleteHandler(task)}}>Delete</button></div>
               : null
            ))
          : null}
      
    
  </main>)
}

export default CompletedTasks;
