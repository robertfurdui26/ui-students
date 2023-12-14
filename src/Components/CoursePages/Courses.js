import React, { useState, useEffect } from "react";
import axios from "axios";
import './Courses.css';


const Courses = () => {
    const [course, setCourse] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7031/api/Course/courses');
                if (response.status === 200) {
                    console.log('Success! All courses here!');
                    setCourse(response.data);
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
                    
                </tr>
            </thead>
            <tbody>
  {course.map((course) => (
    <tr key={course.id}>
      <th scope="row">{course.id}</th>
      <td>{course.name}</td>
      
    </tr>
  ))}
    </tbody>
        </table>
    );
};

export default Courses;
