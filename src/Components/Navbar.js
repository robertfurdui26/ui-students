import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CourseDropdown from './CourseDropDown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);

  const handleClick = () => setClick(!false);
  const closeMobileMenu = () => {
    setClick(false);
    setServicesDropdown(false);
    setCoursesDropdown(false);
  };

  const onMouseEnterServices = () => {
    if (window.innerWidth >= 900) {
      setServicesDropdown(true);
    }
  };

  const onMouseLeaveServices = () => {
    if (window.innerWidth >= 900) {
      setServicesDropdown(false);
    }
  };

  const onMouseEnterCourses = () => {
    if (window.innerWidth >= 900) {
      setCoursesDropdown(true);
    }
  };

  const onMouseLeaveCourses = () => {
    if (window.innerWidth >= 900) {
      setCoursesDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          StudentCatalog <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/altceva' className='nav-links' onClick={closeMobileMenu}>
              All Students
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterServices}
            onMouseLeave={onMouseLeaveServices}
          >
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Students <i className='fas fa-caret-down' />
            </Link>
            {servicesDropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterCourses}
            onMouseLeave={onMouseLeaveCourses}
          >
            <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
              Courses <i className='fas fa-caret-down' />
            </Link>
            {coursesDropdown && <CourseDropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/teacher' className='nav-links' onClick={closeMobileMenu}>
              Teacher
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
