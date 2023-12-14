import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowStudentsGrades = () => {
  const [marks, setMarks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7031/api/Marks/marks');
        if (response.status === 200) {
          console.log('Success! All grades here!');
          setMarks(response.data);
        } else {
          setMessage('No data found');
        }
      } catch (error) {
        setMessage('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Student ID</th>
          <th scope="col">Course ID</th>
          <th scope="col">Grade</th>
          <th scope="col">Date Grade</th>
        </tr>
      </thead>
      <tbody>
        {marks.map((mark) => (
          <tr key={mark.id}>
            <th scope="row">{mark.studentId}</th>
            <td>{mark.courseId}</td>
            <td>{mark.grade}</td>
            <td>{mark.dataGrade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowStudentsGrades;
