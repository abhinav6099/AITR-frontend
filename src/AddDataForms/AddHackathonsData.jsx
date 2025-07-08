import React, { useEffect, useState } from 'react';
import StudentHackathonForm from '../Forms/StudentForms/Hackathons';
import HackathonTable from '../table/HackathonTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddHackathonsData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/hackathons');
      setData(res.data.hackathons); // adjust key as per your backend response
    } catch (error) {
      console.error('Error fetching hackathons:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/hackathon', formData);
      reset();
      setLoading(prev => !prev);
    } catch (error) {
      console.error('Error submitting hackathon data:', error);
    }
  };

  return (
    <div>
      <StudentHackathonForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <HackathonTable data={data} />
    </div>
  );
}

export default AddHackathonsData;
