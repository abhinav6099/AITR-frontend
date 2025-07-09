
import FacultyPatentForm from '../Forms/FacultyForms/Patent'
import PatentTable from '../table/PatentsTable'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AddPatentData() {

  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/faculty/research-papers');
      console.log(res.data.papers)
      setData(res.data.papers); // Adjust key based on your backend response
    } catch (error) {
      console.error("Error fetching research papers:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (data) => {
    try {

      console.log(data)
      await axios.post('http://localhost:3000/api/v1/faculty/research-paper', formData);
      reset(); // clear form

      await axios.post(url , {
          facultyId: data.facultyId,
          facultyName:data.facultyName,
          department:data.department,
          title:data.title,
          applicant:data.applicant,
          applicationNumberdata:data.applicationNumberdata,
          applicationDate: data.applicationDate,
          status: data.status,
          coInventors:data.coInventors,
          country:data.country,
          category:data.category,
          fileId:data.fileId,
          patentTitle:data.patentTitle,
          patentType:data.patentType,
          inventors:data.inventors,
          publicationDate: data.publicationDate,
          abstract: data.abstract
      }) 

      setLoading(prev => !prev); // re-fetch data
    } catch (error) {
      console.error("Error submitting research paper:", error);
    }
  };

  

  return (
    <div>
        <FacultyPatentForm handleSubmit={handleSubmit} register={register} reset={reset} onSubmit={onSubmit} />
        <PatentTable data={data} />
    </div>
  );
}

export default AddPatentData;
