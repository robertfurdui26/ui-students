import React,{useState} from 'react';
import axios from 'axios';
import './StudentUpdate.css';


const StudentUpdate = () =>{

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [updateStudent, setUpdateStudent] = useState(null);

  const handleUpdateStudent = async () => {
    try {
      const response = await axios.patch(`https://localhost:7031/api/Student/updateStudent`, {
        id: id,
        name: name,
        age: age
      });

      setUpdateStudent(response.data);
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
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Student Age:</label>
              <input
                type="text"
                className="form-control"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button onClick={handleUpdateStudent} className="btn btn-black">Update Student</button>
  
            {updateStudent && (
              <div className="mt-4">
                <h2>Student Updated</h2>
                <p>Name: {updateStudent.name}</p>
                <p>Age: {updateStudent.age}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default StudentUpdate;