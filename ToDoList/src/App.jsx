import React, {useState} from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('type here');
  const [tasks, setTasks] = useState([]);
  
  const handleChange= (e) => setInput(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((task, i) => i !== indexToDelete))
  };
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  
  return (
    <>
      <h1 className="page-title">To-Do-List</h1>
      <form onSubmit={handleClick}>
        <input value={input} onChange={handleChange}/>
        <button type="submit">Add</button>
      </ form>
      <h2>To do:</h2>
      <ul>
        {tasks.map((task, index) => 
          <li key={index} className='task-item'>
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              <span className="task-text"style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </div>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: 'auto' }}>REMOVE</button>
          </li>)
        } 
      </ul>
    </>
  )
}

export default App
