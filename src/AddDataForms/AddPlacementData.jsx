import React, { useEffect, useState } from 'react';
import StudentPlacementForm from '../Forms/StudentForms/Placement';
import PlacementTable from '../table/Placement';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddPlacementData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/placements');
      setData(res.data.placements); // Adjust if your backend returns different key
    } catch (err) {
      console.error("Error fetching placement data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/placement', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting placement data:", err);
    }
  };

  return (
    <div>
      <StudentPlacementForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <PlacementTable data={data} />
    </div>
  );
}

export default AddPlacementData;
