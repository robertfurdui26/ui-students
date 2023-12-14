import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { CourseItems } from './CourseItem';
import './CourseDropdown.css';


function CourseDropdown(){
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <>
        <ul onClick={handleClick}
            className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {CourseItems.map((item,index) =>{
                    return(
                        <li key={index}>
                            <Link to={item.coursePath}
                            className={item.cCourseName}
                            onClick={() =>setClick(false)}
                            >
                                {item.courseTitle}

                            </Link>
                        </li>
                    )
                })}

        </ul>
        </>
    )
}

export default CourseDropdown;