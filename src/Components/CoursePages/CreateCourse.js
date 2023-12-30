import React, { useState } from 'react';
import axios from 'axios';
import './CreateCourse.css';


const CreateCourse = () =>{

    const [name,setName] = useState('');
    const[createCourse,setCreateCourse] = useState('');

    const handleCreateCourse = async () => {
        try{
            const response = await axios.post('https://localhost:7031/api/Course/addCourse',{
                name:name
            });
            setCreateCourse(response.data);

        }catch(error){
            console.error('Error createing course',  error);
        }

    };


    return(
        <div className="container mt-5">
    <div className="card-create bg-dark text-white">
      <div className="card-body-create">
        <h1 className="card-title-create">Create a Course</h1>
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

          

          <button
            type="button"
            className="btn btn-black"
            onClick={handleCreateCourse}
          >
            Create Course
          </button>
        </form>

        {createCourse && (
  <div className="mt-4 bg-primary text-white p-4 rounded">
    <h2>Course Created</h2>
    <p className="mb-1">Name: {createCourse.name}</p>
  </div>
        )}
      </div>
    </div>
  </div>

    )
}

export default CreateCourse;