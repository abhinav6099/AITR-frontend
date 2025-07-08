import React, { useEffect, useState } from 'react';
import ResearchPaper from '../Forms/FacultyForms/ResearchPaper';
import ResearchPaperTable from '../table/ResearchPaperTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddFacultyResearchData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/faculty/research-papers');
      setData(res.data.researchPapers); // Adjust key based on your backend response
    } catch (error) {
      console.error("Error fetching research papers:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/faculty/research-paper', formData);
      reset(); // clear form
      setLoading(prev => !prev); // re-fetch data
    } catch (error) {
      console.error("Error submitting research paper:", error);
    }
  };

  return (
    <div>
      <ResearchPaper
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <ResearchPaperTable data={data} />
    </div>
  );
}

export default AddFacultyResearchData;
