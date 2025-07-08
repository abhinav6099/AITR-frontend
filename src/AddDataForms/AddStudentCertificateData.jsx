import React, { useEffect, useState } from 'react';
import StudentCertificateForm from '../Forms/StudentForms/Certificate';
import StudentCertificatesTable from '../table/CertificateTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddStudentCertificateData() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/certificates');
      setData(res.data.certificates); // Adjust based on your backend response
    } catch (err) {
      console.error("Error fetching certificate data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/certificate', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting certificate data:", err);
    }
  };

  return (
    <div>
      <StudentCertificateForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentCertificatesTable data={data} />
    </div>
  );
}

export default AddStudentCertificateData;
