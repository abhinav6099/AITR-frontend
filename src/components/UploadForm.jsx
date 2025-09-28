import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:3000/upload/hackathon", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log("Inserted:", res.data);
      alert(`Inserted ${res.data.insertedCount} records!`);
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <input
        type="file"
        accept=".xlsx,.xls,.csv"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
