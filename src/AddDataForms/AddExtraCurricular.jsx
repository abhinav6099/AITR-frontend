import React, { useEffect, useState } from 'react';
import ExtraCurricularForm from '../Forms/StudentForms/ExtraCurricularForm';
import StudentTable from '../table/StudentTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddExtraCurricular() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/extracurricular');
      setData(res.data.extraCurricular); // Adjust backend key if needed
    } catch (err) {
      console.error("Error fetching extracurricular data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/extracurricular', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting extracurricular data:", err);
    }
  };

  return (
    <div>
      <ExtraCurricularForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentTable data={data} />
    </div>
  );
}

export default AddExtraCurricular;
