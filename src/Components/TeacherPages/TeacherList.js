import React, { useState, useEffect } from "react";
import axios from "axios";


const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7031/api/Teacher/getTeacherInfo');
                if (response.status === 200) {
                    console.log('Success! All Teachers here!');
                    setTeachers(response.data);
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
                    <th scope="col">Description</th>

                </tr>
            </thead>
            <tbody>
  {teachers.map((teacher) => (
    <tr key={teacher.id}>
      <th scope="row">{teacher.id}</th>
      <td>{teacher.name}</td>
      <td>{teacher.age}</td>
      <td>{teacher.description}</td>

      
    </tr>
  ))}
    </tbody>
        </table>
    );
};

export default TeacherList;
