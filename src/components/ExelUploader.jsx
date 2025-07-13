import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';

const ExcelUploader = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = async (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);

      setExcelData(json);

      // Send to backend to save in MongoDB
      try {
        await axios.post('http://localhost:3000/api/upload-excel', { data: json });
        alert('Data uploaded and saved to MongoDB!');
      } catch (error) {
        console.error('Error saving data:', error);
        alert('Upload failed.');
      }
    };
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
    </div>
  );
};

export default ExcelUploader;
