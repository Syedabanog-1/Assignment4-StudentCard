import React from 'react';
import StudentCard from './components/StudentCard'; // Adjust the path if necessary
import  Student  from './models/Student'; // Ensure this model exists in your project
import './globals.css';

const students: Student[] = [
  { id: 100005, name: 'John Doe', grade: 'A', image: 'john.jpg', day: ' Monday 2-5'},
  { id: 342505, name: 'Jane Herry', grade: 'B', image: 'jane.jpg', day: 'Wednesday 7-10'},
  { id: 206783, name: 'Michael Nich ', grade: 'A', image: 'Mic.jpg', day: 'Tuesday 9-12'},
];

const Home = () => {
  return (
    <div className='w-40 h-30 p-20 bg-blue-200 text-green-300'>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
      
    </div>
  
    
  
  
    
  );
};

export default Home;