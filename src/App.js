import "./App.css";
import Examp from "./components/Header";
import react, { useState } from "react";
import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  const [currentView,setCurrentView]=useState("Home")
  // const homeClickHandler=()=>{
  //   setMain("Home")
  // }
  // const createTaskClickHandler=()=>{
  //   setMain("Create Task")
  // }
  // const pendingTasksClickHandler=()=>{
  //   setMain("Pending Tasks")
  // }
  // const completedTasksClickHandler=()=>{
  //   setMain("Completed Tasks")
  // }
  const currentViewHandler=(e)=>{
    setCurrentView(e);
  }
  return (
    <>
      <Header></Header>
      {/* <Nav OnHomeClick={homeClickHandler} OnCreateTaskClick={createTaskClickHandler} OnPendingTasksClick={pendingTasksClickHandler} OnCompletedTasksClick={completedTasksClickHandler}></Nav> */}
      <Nav SetCurrentView={currentViewHandler}></Nav>
      <Main DisplayItem={currentView}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
