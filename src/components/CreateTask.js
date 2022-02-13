import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateTask() {
  const intialValues={title: "",
  createdAt: "",
  targetAt: "",
  isCompleted: false

  }
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [postData, setPostData] = useState(intialValues);

  const postHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // alert(postData.targetAt)
    // setPostData(intialValues)
    axios
      .post("http://localhost:5000/tasks", {
        ...postData,
        isCompleted: false,
        createdAt: Date(),
      })
      .then((res) => {
        console.log(`The title is: ${res.data.title}`);
        setPostData(intialValues)
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message)
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log("After axios post");
  };
  return (
    <main className="main">
      <form id="create-form" onSubmit={postHandler}>
        <input
          required
          id="input1"
          type={"text"}
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <input
          required
          type={"datetime-local"}
          value={postData.targetAt}
          onChange={(e) => {
            setPostData({ ...postData, targetAt: e.target.value });
          }}
        />
        <button type="submit">Add</button>
      </form>
      {isLoading ? "...Loading" : error ? error : null}
    </main>
  );
}

export default CreateTask;
