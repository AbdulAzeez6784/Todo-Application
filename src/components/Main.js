import React, { useEffect, useState } from "react";
import CompletedTasks from "./CompletedTasks";
import CreateTask from "./CreateTask";
import Home from "./Home";
import PendingTasks from "./PendingTasks";

function Main({DisplayItem}) {
  let item = DisplayItem;
  // Displaying prop in console
  console.log(item);
  // const [home,setHome]=useState(false)
  // const [createTask,setCreateTask]=useState(false)
  // const [pendingTasks,setPendingTasks]=useState(false)
  // const [completedTasks,setCompletedTasks]=useState(false)
  // if(item==="Home")
  // {
  //  setHome(true)
  //  setCreateTask(false)
  //  setPendingTasks(false)
  //  setCompletedTasks(false)
  // }
  // if(item==="CreateTask")
  // {
  //  setHome(false)
  //  setCreateTask(true)
  //  setPendingTasks(false)
  //  setCompletedTasks(false)
  // }
  // if(item==="PendingTasks")
  // {
  //  setHome(false)
  //  setCreateTask(false)
  //  setPendingTasks(true)
  //  setCompletedTasks(false)
  // }
  // if(item==="CompletedTasks")
  // {
  //  setHome(false)
  //  setCreateTask(false)
  //  setPendingTasks(false)
  //  setCompletedTasks(true)
  // }
  // const completeHandler = (item) => {
  //   setIsLoading(true);
  //   axios
  //     .post("http://localhost:5000/completed", {...item,completedAt:Date()})
  //     .then((res) => {
  //       axios
  //         .delete(`https://localhost:5000/tasks/${item.id}`)
  //         .then((res) => {
  //           console.log("successful");
  //           axios
  //         .get("http://localhost:5000/tasks")
  //         .then((res) => {
  //           setTasks(res.data);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //           setError(e.message);
  //         })
  //         .finally(() => {
  //           // setIsLoading(false);
  //         });
  //       axios
  //         .get("http://localhost:5000/completed")
  //         .then((res) => {
  //           setCompleted(res.data);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //           setError1(e.message);
  //         })
  //         .finally(() => {
  //           // setIsLoading(false);
  //         });
  //         })
  //         .catch((e) => {
  //           console.log(e.message);
  //         });
        
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };
  // const deleteHandler=(item)=>{
  //   setIsLoading(true);
  //   axios.delete(`http://localhost:5000/tasks/${item.id}`).catch((e)=>{
  //     console.log(e.message);
  //   }).then((res)=>{
  //     console.log("Successfully deleted");
  //     axios
  //         .get("http://localhost:5000/tasks")
  //         .then((res) => {
  //           setTasks(res.data);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //           setError(e.message);
  //         })
  //         .finally(() => {
  //           // setIsLoading(false);
  //         });
  //       axios
  //         .get("http://localhost:5000/completed")
  //         .then((res) => {
  //           setCompleted(res.data);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //           setError1(e.message);
  //         })
  //         .finally(() => {
  //           // setIsLoading(false);
  //         });
  //   }).finally(()=>{
  //     setIsLoading(false)
  //   })
  // }
  if (item === "Home") {
    return <Home ></Home>;
  }
  if (item === "Create Task") {
    return <CreateTask></CreateTask>;
  }
  if (item === "Pending Tasks") {
    return <PendingTasks></PendingTasks>;
  }
  if (item === "Completed Tasks") {
    return <CompletedTasks></CompletedTasks>;
  }
}

export default Main;
