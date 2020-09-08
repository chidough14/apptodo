import React, { useState, useEffect } from 'react';


let due

function Todo() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    //const [due_date, setDate] = useState({})

   /*  useEffect(() => {
        const tsk = localStorage.getItem('tasks')

        setTasks([...tasks, tsk])
    }, []) */

  
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
       //localStorage.setItem('tasks', tasks)
      
    }

    const onCreateTask = (e) => {
        e.preventDefault()

        const obj = {
            id: revisedRandId(),
            name: task,
            time: new Date(),
            due_date: due,
            status: 'Unstarted'
        }

        setTasks([...tasks, obj])
        setTask('')
        //due = ''

        console.log(tasks)
    }

    const handleDate = (e) => {
        const due_date = e.target.value
        due = due_date
    }

  return (
    <div className="container mt-5">
        <form onSubmit={onCreateTask}>
            <div className="form-group">
                <input className="form-control" placeholder="Title" type="text" onChange={onChangeTitle} value={task} /><br></br>
                <h5>Due Date</h5><input type="date"  name="due_date" className="form-control" onChange={handleDate} />
            </div>
            <button type="submit" className="btn btn-info">Submit</button>
        </form>

        <div>
            {tasks.sort((a, b) => a.time < b.time ? 1 : -1).map((task) => (
                <div key={task.id}>
                    <h4>{task.name} - ({task.status}) {new Date(task.due_date) < new Date() ? <span style={{color: 'red'}}>Due</span> : null } </h4>
                    <input type="checkbox" value={task.id}  onChange={handleCheck} className="form-control" />
                </div>
            ))}
        </div>
    </div>
  );
}

export default Todo;
