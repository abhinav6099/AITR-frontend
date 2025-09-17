import React, { useEffect, useState } from 'react';
import ResearchForm from '../../Forms/StudentForms/ResearchForm';
import StudentResearchPaper from '../../table/StudentResearchPaper';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddStudentResearchData() {

  const { register, handleSubmit, reset } = useForm()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [submit, setSubmit] = useState(false)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/students/research-papers")
      console.log(data.data)
      setData(data.data.researchPapers)
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
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)
      if(res.status === 200 && res.data?.fileId){

        const url = "http://localhost:3000/api/v1/students/research-paper"
        const response = await axios.post(url
          , {
            studentName: data.studentName,
            enrollmentNumber: data.enrollmentNumber,
            branch: data.branch,
          batch: data.batch,
          doiOrIsbn: data.doiOrIsbn,
          titleOfPaper: data.titleOfPaper,
          publicatioDate: data.publicatioDate,
          insternshipRole: data.insternshipRole,
          journalOrConferenceName: data.journalOrConferenceName,
          coAuthors: data.coAuthors,
          indexing: data.indexing,
          facultyGuide: data.facultyGuide,
          
          fileId: res.data.fileId,
        }
      )
      console.log(response.data)
    }else {
        console.error("File upload failed, skipping Profile creation.");
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
    console.log(data)

    setLoading((p) => !p)
  }


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
