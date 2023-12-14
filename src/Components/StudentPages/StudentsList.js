import React, { useState, useEffect } from "react";
import axios from "axios";
import './StudentList.css';


const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7031/api/Student/getAllStudents');
                if (response.status === 200) {
                    console.log('Success! All students here!');
                    setStudents(response.data);
                } else {
                    setMessage('No data found');
                }
            } catch (error) {
                setMessage('No Data Found');
            }
        };
        fetchData();

    }, []);

    return (
      
        <table className="table ">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
  {students.map((student) => (
    <tr key={student.id}>
      <th scope="row">{student.id}</th>
      <td>{student.name}</td>
      <td>{student.age}</td>
      
    </tr>
  ))}
    </tbody>
        </table>
    );
};

export default StudentsList;
