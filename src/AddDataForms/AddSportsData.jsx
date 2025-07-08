import React, { useEffect, useState } from 'react';
import SportForm from '../Forms/StudentForms/SportsForm';
import StudentTable from '../table/StudentTable'; // Rename to `SportsTable` if it's specific
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddSportsData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/sports');
      setData(res.data.sports); // Adjust according to your backend key
    } catch (err) {
      console.error("Error fetching sports data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/sport', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting sport data:", err);
    }
  };

  return (
    <div>
      <SportForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentTable data={data} />
    </div>
  );
}

export default AddSportsData;
