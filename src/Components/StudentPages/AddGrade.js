import React, { useState } from 'react';
import axios from 'axios';


const AddGrade =() =>{
    const [studentId,setStudentId] = useState('');
    const[courseId,setCourseId] = useState('');
    const[grade,setGrade] = useState('');
    const[createGrade,setCreateGrade] = useState('');

    const handleCreateGrade = async() =>{
        try{
            const response = await axios.post('https://localhost:7031/api/Marks/addMarks',{

            studentId: studentId,
            courseId:courseId,
            grade: grade
            });

            setCreateGrade(response.data);

        }
        catch(error){
           console.error('Error adding grade!');
        }
    };

    return(
        <div className="container mt-5">
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h1 className="card-title">Add Grade Student</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="studentId" className="form-label">
              Student Id:
            </label>
            <input
              type="text"
              className="form-control"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="courseId" className="form-label">
              Course Id:
            </label>
            <input
              type="text"
              className="form-control"
              id="courseId"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="grade" className="form-label">
              Grade:
            </label>
            <input
              type="text"
              className="form-control"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-black"
            onClick={handleCreateGrade}
          >
            Add Grade
          </button>
        </form>

        {createGrade && (
  <div className="mt-4 bg-primary text-white p-4 rounded">
    <h2>grade Added</h2>
    <p className="mb-1">Student Id: {createGrade.studentId}</p>
    <p>Course Id: {createGrade.courseId}</p>
    <p>Grade: {createGrade.grade}</p>

  </div>
        )}
      </div>
    </div>
  </div>
    )
}

export default AddGrade;