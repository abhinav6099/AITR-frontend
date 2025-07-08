import React, { useEffect, useState } from 'react';
import StudentForm from '../Forms/StudentForms/StudentForm';
import StudentTable from '../table/StudentTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddStudentData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/data');
      setData(res.data.students); // adjust key based on your backend
    } catch (err) {
      console.error("Error fetching student data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting student data:", err);
    }
  };

  return (
    <div>
      <StudentForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentTable data={data} />
    </div>
  );
}

export default AddStudentData;
