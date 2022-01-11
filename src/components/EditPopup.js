import { useState } from 'react';
import './EditPopup.css';


const EditPopup = props =>  {
	const [task, setTask] = useState(props.task);

  const handleChange = e => setTask(e.target.value);
  
  const handleClose = () => props.handleClose(-1);
  
  const handleSubmit = e => {
  	e.preventDefault();
    props.handleChange(task);
    props.handleClose(-1);
  }

	return (
      <div className="popup">
        <div className="popup-inner">
        <h2>Edit your task</h2>
          <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
            <div className="col-auto">
              <label className="col-form-label">Task:</label>
            </div>
            <div className="col-auto">
              <input className="form-control" id="task" type="text" value={task} minLength="3" required onChange={handleChange}/>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary btn-sm" type="submit">Change</button>
            </div>
          </form>
          <span className= "close-btn" onClick={handleClose}>X</span>
        </div>
      </div>
  );
}

export default EditPopup