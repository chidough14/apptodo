import React, { useState, useEffect } from 'react';



function Todo() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

  
    const onChangeTitle = (e) => {
        setTask(e.target.value)
    }

    function revisedRandId() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }

    const handleCheck = (e) => {

       tasks.map(task => {
          if(task.id === e.target.value) {
               return task.status  = 'Completed'
          }

          return task
       })

       setTasks([...tasks])
      
    }

    const onCreateTask = (e) => {
        e.preventDefault()

        const obj = {
            id: revisedRandId(),
            name: task,
            time: new Date(),
            status: 'Unstarted'
        }

        setTasks([...tasks, obj])
        setTask('')
    }

  return (
    <div className="container">
        <form onSubmit={onCreateTask}>
            <div className="form-group">
                <input className="form-control" placeholder="Title" type="text" onChange={onChangeTitle} value={task} />
                <input type="date"  name="due_date" className="form-control" />
            </div>
            <button type="submit" className="btn btn-info">Submit</button>
        </form>

        <div>
            {tasks.sort((a, b) => a.time < b.time ? 1 : -1).map((task) => (
                <div key={task.id}>
                    <h4>{task.name} - ({task.status})</h4>
                    <input type="checkbox" value={task.id}  onChange={handleCheck} className="form-control" />
                </div>
            ))}
        </div>
    </div>
  );
}

export default Todo;
