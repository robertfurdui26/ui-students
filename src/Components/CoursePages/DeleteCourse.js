import React,{useState} from 'react';
import axios from 'axios';
import './CreateCourse.css';

const DeleteCourse = () =>{
  const [id, setId] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState('');

  const handleDeleteCourse = async () => {
    try {
      const response = await axios.delete(`https://localhost:7031/api/Course/deleteCourse?id=${id}`);
      console.log(response.data); 
      setDeleted(true);
      setError('');
    } catch (error) {
      console.error('Error deleting Course:', error);
      setError('Error deleting Course. Please check the ID and try again.');
      setDeleted(false);
    }
  };




    return(
        <div className="container mt-4">
      <div className="card-create bg-dark text-white">
        <div className="card-body-create">
          <h1 className="card-title-create">Delete a Course</h1>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Course ID:</label>
            <input
              type="number"
              className="form-control"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button onClick={handleDeleteCourse} className="btn btn-black">Delete Course</button>

          {deleted && (
            <div>
              <h2>Course Deleted</h2>
              <p>Course with ID {id} has been successfully deleted.</p>
            </div>
          )}

          {error && (
            <div style={{ color: 'red' }}>
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>

    );
};

export default DeleteCourse;