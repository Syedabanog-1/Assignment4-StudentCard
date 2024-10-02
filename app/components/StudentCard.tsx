import React from 'react';
import Student  from '../models/Student'; // Adjust the path if necessary

interface Props {
  student: Student;
}

const StudentCard: React.FC<Props> = ({ student }) => {
  return (<>
    <div>
     <h2>StudentID: {student.id}</h2>
      <h2>StudentName: {student.name}</h2>
      <h2>Grade: {student.grade}</h2>
      <h2>Day: {student.day}</h2><br />
    </div>
  </>);
};

export default StudentCard;