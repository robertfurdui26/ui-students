import React from 'react';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import './App.css';
import StudentList from './Components/StudentPages/StudentsList';
import Navbar from './Components/Navbar';
import CreateStudent from './Components/StudentPages/CreateStudent';
import StudentUpdate from './Components/StudentPages/StudentUpdate';
import DeleteStudent from './Components/StudentPages/DeleteStudent';
import Courses from './Components/CoursePages/Courses';
import CreateCourse from './Components/CoursePages/CreateCourse';
import AddGrade from './Components/StudentPages/AddGrade';
import ShowStudentsGrades from './Components/StudentPages/ShowStudentsGrade';
import UpdateCourse from './Components/CoursePages/UpdateCourse';
import DeleteCourse from './Components/CoursePages/DeleteCourse';
import TeacherList from './Components/TeacherPages/TeacherList';
import ContactUs from './Components/ContactUs';






function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<StudentList />} />
        <Route path='/createStudent' element = {<CreateStudent />} />
        <Route path='/updateStudent' element = {<StudentUpdate />} />
        <Route path='/deleteStudent' element = {<DeleteStudent />} />
        <Route path='/courses' element = {<Courses />} />
        <Route path='/courseCreate' element = {<CreateCourse />} />
        <Route path='/addGrade' element = {<AddGrade />} />
        <Route path='/showGrade' element = {<ShowStudentsGrades />} />
        <Route path='/courseUpdate' element = {<UpdateCourse />} />
        <Route path='/deleteCourses' element = {<DeleteCourse />} />
        <Route path='/teacher' element = {<TeacherList />} />
        <Route path='/contact-us' element = {<ContactUs />} />












      </Routes>
    </Router>
  )
}

export default App;