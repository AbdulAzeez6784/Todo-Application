import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState({});
  const getApi=()=>{
    setIsLoading(true);
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  const completeHandler = (item) => {
    // item.preventDefault();
    setIsLoading(true);
    const obj={...item,isCompleted:true, completedAt:Date()}
    axios
      .put(`http://localhost:5000/tasks/${item.id}`, obj )
      .then((res) => {
        console.log(res.data)
        getApi();
        
      })
      .catch((e) => {
        console.log(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const deleteHandler=(item)=>{
    // item.preventDefault();
    setIsLoading(true);
    axios.delete(`http://localhost:5000/tasks/${item.id}`).catch((e)=>{
      console.log(e.message);
    }).then((res)=>{
      console.log("Successfully deleted");
      getApi();
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <main className="main">
      {isLoading ? "...Loading" : error ? error : null}
      <fieldset>
        {/* <legend>Pending Tasks:</legend> */}
        <ul>
          {tasks.length
            ? tasks.map((task, index) => ( task.isCompleted ? 
                <li key={index}>
                 <span style={{color:"green"}}><strike>{task.title}</strike></span><button title="Delete the task" onClick={()=>{deleteHandler(task)}}>❌</button>
                </li> : <li key={index}>
                  {task.title}
                  <button
                    title="Complete the Task"
                    onClick={() => {
                      completeHandler(task)
                    }}
                  >
                    ✅
                  </button>
                  <button title="Delete the task" onClick={()=>{deleteHandler(task)}}>❌</button>
                </li>
              ))
            : null}
        </ul>
      </fieldset>
    </main>
  );
}

export default Home;
