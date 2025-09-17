import React, { useEffect, useState } from 'react';
import HackathonChallengeForm from '../../Forms/StudentForms/HackathonChallengeForm';
import StudentTable from '../../table/StudentTable'; // Replace with HackathonTable if needed
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddHackathonChallenges() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/hackathonchallenges');
      setData(res.data.hackathonChallenges); // Adjust this key based on your backend response
    } catch (err) {
      console.error("Error fetching hackathon challenges:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/hackathonchallenges', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting hackathon challenge data:", err);
    }
  };

  return (
    <div>
      <HackathonChallengeForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentTable data={data} />
    </div>
  );
}

export default AddHackathonChallenges;
