import React, { useEffect, useState } from 'react';
import FacultyConferenceForm from '../Forms/FacultyForms/Conference';
import ConferenceTable from '../table/ConferenceTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddConferenceData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch conference data
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/faculty/conferences');
      setData(res.data.conferences); // Adjust based on actual API response
    } catch (err) {
      console.error("Error fetching conferences:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  // Submit form
  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/faculty/conference', formData);
      reset();
      setLoading(prev => !prev); // Trigger data refresh
    } catch (err) {
      console.error("Error submitting conference data:", err);
    }
  };

  return (
    <div>
      <FacultyConferenceForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <ConferenceTable data={data} />
    </div>
  );
}

export default AddConferenceData;
