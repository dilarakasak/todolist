import React, { useState } from 'react'
import './Header.css';

function Header() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (Event) => {
    setNewTask(Event.target.value);
  };

  const addTask = () => {
    if(newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updateTasks = [...tasks];
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
  };

  const updateTasks = (index, updatedValue) => {
    const updatesTasks = [...tasks];
    updatesTasks[index] = updatedValue;
    setTasks(updatesTasks);
  };

  return (
    <div>
    <div>    
      <div className='center'>
        <h1 className='baslik center'>to do list</h1>
        <input className='arama' type="text" value={newTask} onChange={handleInputChange} placeholder="Add Task" />
        &nbsp; &nbsp;
        <button className='arama_button' onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <div className='yazi satir' key={index}>
            {task}
            <div className='buttons'>
            <button className='sil' onClick={() => deleteTask(index)}>
              <img className='resim' src='data:image/png;base64,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'></img>
            </button>
            <button className='guncelle' onClick={() => updateTasks(index, prompt('Yeni Görev: ', task))}>
              <img className='resim' src='https://st2.depositphotos.com/4060975/8056/v/950/depositphotos_80565132-stock-illustration-refresh-vector-icon.jpg'></img>
            </button>
            </div>
          </div>
        ))}        
      </ul>
    </div>
    </div>
  )
}

export default Header;