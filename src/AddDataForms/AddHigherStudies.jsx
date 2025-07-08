import React, { useEffect, useState } from 'react';
import HigherStudiesForm from '../Forms/StudentForms/HigherStudiesForm';
import HigherStudiesTable from '../table/HigherStudiesTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddHigherStudies() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/higherstudies');
      setData(res.data.higherStudies); // Change this based on backend key
    } catch (error) {
      console.error('Error fetching higher studies data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/higherstudies', formData);
      reset();
      setLoading(prev => !prev);
    } catch (error) {
      console.error('Error submitting higher studies data:', error);
    }
  };

  return (
    <div>
      <HigherStudiesForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <HigherStudiesTable data={data} />
    </div>
  );
}

export default AddHigherStudies;
