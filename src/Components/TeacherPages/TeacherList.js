import React, { useState, useEffect } from "react";
import axios from "axios";
import './Teacher.css';


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
      
        <div className="cards">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h5 className="card-title-teacher">{teacher.name}</h5>
                <h5 className="card-title-teacher">Age: {teacher.age}</h5>

              </div>
              <div className="flip-card-back">
                <h5 className="name">{teacher.description}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default TeacherList;
