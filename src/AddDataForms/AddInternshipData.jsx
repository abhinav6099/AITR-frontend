import React, { useEffect, useState } from 'react';
import StudentInternshipForm from '../Forms/StudentForms/Internship';
import InternshipTable from '../table/InternshipTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddInternshipData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/internships');
      setData(res.data.internships); // Adjust based on backend key
    } catch (err) {
      console.error("Error fetching internships:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/internship', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting internship data:", err);
    }
  };

  return (
    <div>
      <StudentInternshipForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <InternshipTable data={data} />
    </div>
  );
}

export default AddInternshipData;
