import React, { useEffect, useState } from 'react';
import ResearchForm from '../Forms/StudentForms/ResearchForm';
import StudentResearchPaper from '../table/StudentResearchPaper';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddStudentResearchData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/research');
      setData(res.data.researchPapers); // Adjust key based on your backend response
    } catch (err) {
      console.error("Error fetching student research data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/research', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting student research paper:", err);
    }
  };

  return (
    <div>
      <ResearchForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentResearchPaper data={data} />
    </div>
  );
}

export default AddStudentResearchData;
