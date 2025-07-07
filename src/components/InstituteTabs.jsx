import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import MouForm from "../Forms/InstituteForms/MousForm";
import axios from "axios";


const InstituteTabs = () => {
  // const location = useLocation();
  const [active, setActive] = useState(false);

  // const [tab, setTab] = useState('');
  const tabs = [
     "Mou" ,
     "Student", 
     "Institute", 
     "Department"
  ];



  // const fetchData = async () => {
  //   if (tab === "Mou") {
  //     console.log("Fetching data for Mou");
  //     // Fetch data for Mou
  //     const response = await axios(`http://localhost:3000/api/v1/institute/mous`);
  //     console.log(response.data);
  //     // const data = await response.json();
  //     setData(data);
  //   } else if (tab === "Student") {
  //     console.log("Fetching data for Student");
  //     // Fetch data for Student
  //   } else if (tab === "Institute") {
  //     console.log("Fetching data for Institute");
  //     // Fetch data for Institute
  //   } else if (tab === "Department") {
  //     console.log("Fetching data for Department");
  //     // Fetch data for Department
  //   }
  // }

  // useEffect(async () => {
  //   fetchData();
  // }, [tab])

  return (
    <nav className="mt-4 px-4">
      <div className="flex flex-wrap justify-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
        {tabs.map((tab, index) => (
          <button 
            key={index}
            /* onClick={() => {
                setTab(label);
                setActive((p) => !p)
            }} */
            
          >
            <div className={`px-4 py-2 bg-white text-black rounded-full ${active && "bg-blue-600" } hover:bg-blue-300 transition-colors duration-200`}>
              {tab}
            </div>
          </button>
        ))}
      </div>
      <div>
    
      </div>

    </nav>


  );
};

export default InstituteTabs;
