import React, { useEffect, useState } from 'react';
import HigherStudiesForm from '../../Forms/StudentForms/HigherStudiesForm';
import HigherStudiesTable from '../../table/HigherStudiesTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddHigherStudies() {

  const { register, handleSubmit, reset } = useForm()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [submit, setSubmit] = useState(false)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/students/higher-studies")
      console.log(data.data)
      setData(data.data.higherStudies)
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

      const url = "http://localhost:3000/api/v1/students/higher-study"
      const response = await axios.post(url
        , {
          courseName: data.courseName,
          scholarship: data.scholarship,
          instituteName: data.instituteName,
          city: data.city,
          country: data.country,
          programDuration: data.progarmaDuration,
          admissionYear: data.admissionYear,

          fileId: res.data.fileId,
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
      <HigherStudiesForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <HigherStudiesTable data={data} />
    </div>
  );
}

export default AddHigherStudies;

// export const HigherStudiesColumn = [
//   {
//     name: "Course Name",
//     selector: row => row.courseName,
//     sortable: true,
//   },
//   {
//     name: "Scholarship",
//     selector: row => row.scholarship || "None",
//     wrap: true,
//   },
//   {
//     name: "Institute Name",
//     selector: row => row.instituteName,
//     sortable: true,
//   },
//   {
//     name: "City",
//     selector: row => row.city,
//   },
//   {
//     name: "Country",
//     selector: row => row.country,
//   },
//   {
//     name: "Duration",
//     selector: row => row.duration,
//   },
//   {
//     name: "Admission Year",
//     selector: row => row.admissionYear,
//     sortable: true,
//   },
// ];
