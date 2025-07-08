import React, { useState, useEffect } from 'react';
import DevelopmentProgram from '../Forms/FacultyForms/DevelopmentProgram';
import DevelopmentProgramTable from '../table/DevelopmentProgramTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddDevelopmentProgramData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/faculty/development-programs');
      setData(response.data.programs); // adjust based on your backend response
    } catch (error) {
      console.error("Error fetching development programs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/faculty/development-program', formData);
      reset(); // clear the form
      setLoading(prev => !prev); // trigger data re-fetch
    } catch (error) {
      console.error("Error submitting development program:", error);
    }
  };

  return (
    <div>
      <DevelopmentProgram onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} reset={reset} />
      <DevelopmentProgramTable data={data} />
    </div>
  );
}

export default AddDevelopmentProgramData;
