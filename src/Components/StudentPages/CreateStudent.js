import React, { useState } from 'react';
import axios from 'axios';
import './CreateStudent.css'

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [createdStudent, setCreatedStudent] = useState(null);

  const handleCreateStudent = async () => {
    try {
      const response = await axios.post('https://localhost:7031/api/Student/createStudent', {
        name: name,
        age: age
      });

      setCreatedStudent(response.data);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div className="container mt-5">
    <div className="card-create bg-dark text-white">
      <div className="card-body-create">
        <h1 className="card-title-create">Create a Student</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-black"
            onClick={handleCreateStudent}
          >
            Create Student
          </button>
        </form>

        {createdStudent && (
  <div className="mt-4 bg-primary text-white p-4 rounded">
    <h2>Student Created</h2>
    <p className="mb-1">Name: {createdStudent.name}</p>
    <p>Age: {createdStudent.age}</p>
  </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default CreateStudent;
