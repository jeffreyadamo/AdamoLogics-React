import React from "react";
import "./style.css";

const Task = (props) => {
    return (
     <div>
         <h2>Task: {props.name} </h2>
    </div>
  )
}

export default Task;