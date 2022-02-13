import React from "react";

function Nav({SetCurrentView}) {
  // const homeClick = () => {
  //   OnHomeClick();
  // };
  // const createTaskClick = () => {
  //   OnCreateTaskClick();
  // };
  // const pendingTasksClick = () => {
  //   OnPendingTasksClick();
  // };
  // const completedTasksClick = () => {
  //   OnCompletedTasksClick();
  // };
  const homeClick = () => {
    SetCurrentView("Home")
  };
  const createTaskClick = () => {
    SetCurrentView("Create Task")
  };
  const pendingTasksClick = () => {
    SetCurrentView("Pending Tasks")
  };
  const completedTasksClick = () => {
    SetCurrentView("Completed Tasks")
  };
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <button onClick={homeClick}>Home</button>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={createTaskClick}>Create Task</button>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={pendingTasksClick}>Pending Tasks</button>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={completedTasksClick}>Completed Tasks</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
