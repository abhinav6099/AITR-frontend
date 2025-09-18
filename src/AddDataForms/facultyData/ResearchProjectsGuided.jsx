import React, { useEffect, useState } from 'react';
import ResearchProjectsGuidedForm from '../Forms/FacultyForms/ResearchProjectsGuidedForm';
import ResearchProjectsGuidedTable from '../table/ResearchProjectsGuidedTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ResearchProjectsGuided = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/faculty/research-projects');
      setData(res.data.projects); // Adjust key based on backend
    } catch (err) {
      console.error('Error fetching research project data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    // todo: send the data via post request
    try {
      await axios.post('http://localhost:3000/api/v1/faculty/research-project', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error('Error submitting research project:', err);
    }
  };

  return (
    <div>
      <ResearchProjectsGuidedForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <ResearchProjectsGuidedTable data={data} />
    </div>
  );
};

export default ResearchProjectsGuided;
