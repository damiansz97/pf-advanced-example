import { useState } from 'react';

const TodosForm = props => {
    const [task, setTask] = useState('');
  
    const handleChange = e => setTask(e.target.value);
    
    const handleSubmit = e => {
        e.preventDefault();
      props.addTask({name:task, done: false});
      setTask('');
    }
  
    return (
          <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto">
        <label className="col-form-label">Task:</label>
        </div>
        <div className="col-auto">
          <input className="form-control" id="task" type="text" value={task} minLength="3" required onChange = {handleChange}/>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary btn-sm" type="submit">Add</button>
        </div>
      </form>
    )
  }

  export default TodosForm;