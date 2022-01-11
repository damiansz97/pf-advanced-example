import { useState } from 'react';
import TodosForm from './TodosForm';
import EditPopup from './EditPopup';
import './TodosList.css';

const TodosList = props => {
	const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  
  const addTask = (task) => setTodos([...todos, task]);
  
  const handleEdit = (index) => (event) => setEditIndex(index);
  
  const handleDelete = (deleteIndex) => (event) => {
  	let newTodos = todos.filter((element, index) => index!=deleteIndex)
    setTodos(newTodos);
  }
  
  const handleChangeName = (taskName) => {
  	let newTodos = [...todos];
    newTodos[editIndex] = {
    	...newTodos[editIndex],
      name: taskName
    };
    setTodos(newTodos);
  }
  
  const handleChangeDone = (index) => (event) => {
  	let newTodos = todos.filter(x => true);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }
  
	return (
    <main>
      <h1>To Do List</h1>
    <TodosForm addTask={addTask}/>
    {
      todos.length > 0 &&
      <table className="table table-hover">
      <thead>
        <tr>
          <th colSpan="4">Tasks</th>
        </tr>
      </thead>
      <tbody className="cointainer">
        {
        todos.map( (task,index) => (
          <tr className="d-flex align-content-center" key={index}>
            <td>{index+1}</td>
            <td onClick={handleChangeDone(index)} className={`flex-grow-1 ${task.done ? "cross" : ""}`}>{task.name}</td>
            <td>
              <input className="btn btn-primary btn-sm " type="button" value="Edit" onClick={handleEdit(index)}/>
            </td>
            <td>
              <input className="btn btn-primary btn-sm space" type="button" value="Delete" onClick={handleDelete(index)}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    }
    { editIndex > -1 && 
      <EditPopup handleClose={setEditIndex} handleChange={handleChangeName} task={todos[editIndex].name}/>
    }
    </main>
  )
}

export default TodosList;
