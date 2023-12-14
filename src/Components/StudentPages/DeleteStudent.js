import React,{useState} from 'react';
import axios from 'axios';

const DeleteStudent = () =>{
  const [id, setId] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState('');

  const handleDeleteStudent = async () => {
    try {
      const response = await axios.delete(`https://localhost:7031/api/Student/delete?id=${id}`);
      console.log(response.data); 
      setDeleted(true);
      setError('');
    } catch (error) {
      console.error('Error deleting student:', error);
      setError('Error deleting student. Please check the ID and try again.');
      setDeleted(false);
    }
  };




    return(
        <div className="container mt-4">
      <div className="card bg-dark text-white">
        <div className="card-body">
          <h1 className="card-title">Delete a student</h1>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Student ID:</label>
            <input
              type="number"
              className="form-control"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button onClick={handleDeleteStudent} className="btn btn-black">Delete Student</button>

          {deleted && (
            <div>
              <h2>Student Deleted</h2>
              <p>Student with ID {id} has been successfully deleted.</p>
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

export default DeleteStudent;