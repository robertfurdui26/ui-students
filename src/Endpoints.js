import axios from "axios";

const baseURL = 'https://localhost:7031';  

const api = axios.create({
    baseURL,
});


const getAllStudents = async (studentGetDto) => {
    try {
        const response = await api.get('/api/Student/getAllStudents', {
            params: studentGetDto,
        });
        if (response.status === 200) {
            console.log('Success! All Students');
            return response.data;
        } else {
            console.error('Error at API');
            throw new Error('Error');
        }
    } catch (error) {
        console.error('Error API', error);
        throw error;
    }
};

export { getAllStudents };

const getAllGrade = async (getMarkDto) => {
    try {
        const response = await api.get('/api/Marks/marks', {
            params: getMarkDto,
        });
        if (response.status === 200) {
            console.log('Success! All Grade');
            return response.data;
        } else {
            console.error('Error at API');
            throw new Error('Error');
        }
    } catch (error) {
        console.error('Error API', error);
        throw error;
    }
};

export { getAllGrade };


const getAllCourses = async (courseGetDto) => {
    try {
        const response = await api.get('/api/Course/courses', {
            params: courseGetDto,
        });
        if (response.status === 200) {
            console.log('Success! All Courses');
            return response.data;
        } else {
            console.error('Error at API');
            throw new Error('Error');
        }
    } catch (error) {
        console.error('Error API', error);
        throw error;
    }
};

export { getAllCourses };

const createStudent = async(studentCreateDto) =>{
    try{
        const response = await api.post('/api/Student/createStudent' , studentCreateDto);
        if(response.data === 200){
            console.log('Student created');
            response.data;
        }else{
            console.error('Error');
            throw new Error('Errror');
        }
    }catch(error){
        console.error('Api error');
        throw error;
    }
}

export {createStudent};

const createCourse = async(createCourseDto) =>{
    try{
        const response = await api.post('/api/Course/addCourse' , createCourseDto);
        if(response.data === 200){
            console.log('Course created');
            response.data;
        }else{
            console.error('Error');
            throw new Error('Errror');
        }
    }catch(error){
        console.error('Api error');
        throw error;
    }
}

export {createCourse};

const addMark = async(markAddDto) =>{
    try{
        const response = await api.post('/api/Marks/addMarks' , markAddDto);
        if(response.data === 200){
            console.log('Mark created');
            response.data;
        }else{
            console.error('Error');
            throw new Error('Errror');
        }
    }catch(error){
        console.error('Api error');
        throw error;
    }
}

export {addMark};

const updateCourse = async(courseUpdateDto) =>{
    try{
        const response = await api.put('/api/Course/updateCourse' , courseUpdateDto);
        if(response.data === 200){
            console.log('Course Updated');
            response.data;
        }else{
            console.error('Error');
            throw new Error('Errror');
        }
    }catch(error){
        console.error('Api error');
        throw error;
    }
}

export {updateCourse};

const updateStudent = async (studentUpdateDto) =>{
    try{
        const response = await api.patch('/api/Student/updateStudent' ,studentUpdateDto);
        if(response.status === 200){
            console.log('Success,student Updated!');
            return response.data;
        }else{
            console.error('Error at API');
            throw new Error('Error');
        }
    }catch(error){

        console.error('Error API');
        throw error;
    }

}

export {updateStudent};


const deleteStudents = async() =>{
    try{
        const response = await api.delete('api/Student/delete');
        if(response.status === 200){
            console.log('Delete Student successfully!');
            response.data;
        }else{
            console.error('Student not found');
        }
    }catch(error){
        console.error('Error trying to comunicate');
        throw error;
    }
}

export {deleteStudents};
