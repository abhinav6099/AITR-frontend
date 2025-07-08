import React, { useState, useEffect } from 'react';
import FacultyPatentForm from '../Forms/FacultyForms/Patent';
import PatentTable from '../table/PatentsTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddPatentData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch patent data
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/faculty/patents');
      setData(res.data.patents); // adjust key based on your backend response
    } catch (err) {
      console.error("Error fetching patent data:", err);
    }
  };

  // Initial load & reload when loading state changes
  useEffect(() => {
    fetchData();
  }, [loading]);

  // Form submit
  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/faculty/patent', formData);
      reset(); // clear form
      setLoading(prev => !prev); // refetch data
    } catch (err) {
      console.error("Error submitting patent data:", err);
    }
  };

  return (
    <div>
      <FacultyPatentForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <PatentTable data={data} />
    </div>
  );
}

export default AddPatentData;
