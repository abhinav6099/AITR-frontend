import React, { useEffect, useState } from 'react';
import ResearchPaper from '../Forms/FacultyForms/ResearchPaper';
import ResearchPaperTable from '../table/ResearchPaperTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddFacultyResearchData() {
  
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/faculty/research-papers")
      console.log(data.data.papers)
      setData(data.data.papers)
      setLoading(false)
    }

  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  }, [loading])

  const onSubmit = async (data) => {

    console.log(data)
    console.log(data.file[0])
    setFile(data.file[0])
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)

      const url = "http://localhost:3000/api/v1/faculty/research-paper"
      const response = await axios.post(url
        , {
          facultyName: data.facultyName,
          organizationName: data.organizationNamet,
          membershipType: data.membershipType,
          membershipId: data.membershipId,
          dateOfJoining: data.dateOfJoining,
          currentStatus: data.currentStatus
        }

      )
      console.log(response)


    } catch (err) {
      console.log("Error:", err)
    }
    console.log(data)

    setLoading((p) => !p)
  }

  return (
    <div>
      <ResearchPaper
        
      />
      <ResearchPaperTable data={data} />
    </div>
  );
}

export default AddFacultyResearchData;
