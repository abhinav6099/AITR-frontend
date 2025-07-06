<<<<<<< HEAD
import React from 'react';
import { useForm } from 'react-hook-form';
import SearchBar from '../components/SearchBar';
import InputBox from '../components/InputBox';
import StudentTabs from '../components/StudentTabs';

const Student = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <div>
      <SearchBar />
      <StudentTabs/>
      </div>
   
  );
};

export default Student;
=======
import React from 'react'

function Student() {
  return (
    <div>Student</div>
  )
}

export default Student
>>>>>>> 6b60373 (last change before commit)
