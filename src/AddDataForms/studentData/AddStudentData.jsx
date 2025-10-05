import React, { useEffect, useState } from 'react';
import StudentForm from '../../Forms/StudentForms/StudentForm';
import StudentTable from '../../table/StudentTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import UploadForm from '../../components/UploadForm';
function AddStudentData() {

  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/students/profiles")
      console.log(data.data.profiles)
      setData(data.data.profiles)

    }

  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  }, [loading])


  const onSubmit = async (data, e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.querySelector("input[type='file']");
    if (fileInput?.files[0]) {
      formData.append("file", fileInput.files[0]);
    }

    try {

      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)
      const url = "http://localhost:3000/api/v1/students/profile"
      const response = await axios.post(url
        , {
          studentId: data.studentId,
          name: data.name,
          enrollmentNumber: data.enrollmentNumber,
          organizingBody: data.organizingBody,
          branch: data.branch,
          batch: data.batch,
          email: data.email,
          year: data.year,
          course: data.course,
          cgpa: data.cgpa,
          dateOfBirth: data.dateOfBirth,
          gender: data.gender,
          category: data.category,
          yearOfAdmission: data.yearOfAdmission,
          yearOfGraduationStatus: data.yearOfGraduationStatus,
          status: data.status,
          githubLink: data.githubLink,
          linkedinProfileLink: data.linkedinProfileLink,
          guardianContactNumber: data.guardianContactNumber,
          guardianName: data.guardianName,
          address: data.address,
          fileId: res.date.fileId
        });
      console.log("Profile saved:", response.data);
    }
    catch (error) {
      console.error("Error occurred:", error.message);
    }
    console.log(data)

    setLoading((p) => !p)
  }

  return (
    <div>
      <UploadForm />
      <StudentForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentTable data={data} />
    </div>
  );
}

export default AddStudentData;
