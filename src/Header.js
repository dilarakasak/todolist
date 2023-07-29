import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completed, setCompleted] = useState("");

  const completeTask = (index) => {
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
    } else {
      setCompleted(completed.filter((i) => i !== index));
    }
  };

  const handleInputChange = (Event) => {
    setNewTask(Event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updateTasks = [...tasks];
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
  };

  const updateTask = (index) => {
    const updatedTask = prompt("Yeni Görev:", tasks[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div>
      <div className="center">
        <h1 className="baslik center">to do list</h1>
        <input
          className="arama"
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add Task"
        />
        &nbsp; &nbsp;
        <button className="arama_button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <div
            key={index}
            className="yazi satir"
            style={{
              textDecoration: completed.includes(index)
                ? "line-through"
                : "none",
            }}
          >
            {task}
            <div className="buttons">
              <button className="sil" onClick={() => deleteTask(index)}>
                <img
                  className="resim"
                  src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png"
                ></img>
              </button>
              <button className="guncelle" onClick={() => updateTask(index)}>
                <img
                  className="resim"
                  src="https://st2.depositphotos.com/4060975/8056/v/950/depositphotos_80565132-stock-illustration-refresh-vector-icon.jpg"
                  alt="Update"
                />
              </button>
              <button
                className="tamamlandi"
                onClick={() => completeTask(index)}
              >
                <img
                  className="resim"
                  src="https://w7.pngwing.com/pngs/131/253/png-transparent-approved-aproved-confirm-outline-thin-yes-approve-icon-thumbnail.png"
                ></img>
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Header;
