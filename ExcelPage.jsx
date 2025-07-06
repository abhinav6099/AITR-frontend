import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form"
import * as XLSX from 'xlsx';

// todo : create a schema for particular tabs where files are bieng uploaded, and its data acces it creator object ID

const ExcelPage = () => {
  
    const [uploadStatus, setUploadStatus] = useState("");
    const [file , setFile] = useState(null)
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm()
  
  
    const onSubmit = async(data) => {
      console.log(data);
      console.log(data.file)
      setFile(data.file[0])
  
      
      const formData = new FormData();
      formData.append("file" , file);
  
      try {

        const res = await axios.post("http://localhost:3000/upload-excel", formData);
        console.log(res.data)
        setUploadStatus("Upload successful!");
        } catch (err) {
        console.error(err);
        setUploadStatus("Upload failed.");
      }
    }  
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
       
        {/* include validation with required or other standard HTML validation rules */}
        <input type="file" {...register("file", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.file && <span>This field is required</span>}
  
  
        <input type="submit" value="click me" />
  
        {uploadStatus && (
          <div className="mt-4 text-sm text-green-600">{uploadStatus}</div>
        )}
      </form>
    )
  }


export default ExcelPage;
