import React,{useState} from 'react';
import axios from 'axios';
import './CreateCourse.css';


const UpdateCourse = () =>{

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [updateCourse, setUpdateCourse] = useState(null);

  const handleUpdateCourse = async () => {
    try {
      const response = await axios.put('https://localhost:7031/api/Course/updateCourse', {
        id: id,
        name: name,
      });

      setUpdateCourse(response.data);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };
    return(
        <div className="container mt-4">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <h1 className="card-title">Update a student</h1>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">Student Id:</label>
              <input
                type="number"
                className="form-control"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Student Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <button onClick={handleUpdateCourse} className="btn btn-black">Update Course</button>
  
            {updateCourse && (
              <div className="mt-4">
                <h2>Course Updated</h2>
                <p>ID : {updateCourse.id}</p>
                <p>Name: {updateCourse.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default UpdateCourse;