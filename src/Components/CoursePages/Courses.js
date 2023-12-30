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
      
        <div className="cards">
      {course.map((course) => (
        <div key={course.id} className="card">
          <h5 className="card-title">{course.name}</h5>
        </div>
      ))}
    </div>
    );
};

export default Courses;
