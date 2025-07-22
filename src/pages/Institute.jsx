import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DepartmentTabs from '../components/DepartmentTabs';
import axios from 'axios';

import DataTable from 'react-data-table-component';
import { EventGrantReceivedColumns } from './Department';

const Institute = () => {
  const [filterText, setFiltertext] = useState('');
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('');

  const tabs = [
    { label: 'MOU' },
    { label: 'Consultancy' },
    { label: 'R&D' },
    { label: 'Event Grant ' },
    { label: 'Event Grant Organized' },
    { label: 'Institute Documents' },
  ];

  const fetchDataByTab = async (selectedTab) => {
    setLoading(true);
    try {
      let response;
      switch (selectedTab) {

        case 'MOU':
          response = await axios.get("http://localhost:3000/api/v1/Institute/mous");
          console.log(response.data)
          setData(response.data.mous);
          setColumn(MouColumns);
          break;

        case 'Consultancy':
          response = await axios.get("http://localhost:3000/api/v1/Institute/consultancies");
          console.log(response.data)
          setData(response.data.consultancies);
          setColumn(ConsultancyColumns);
          break;

        case 'R&D':
          response = await axios.get("http://localhost:3000/api/v1/Institute/rnds");
          console.log(response.data)
          setData(response.data.rds);
          setColumn(RDColumns);
          break;

        case 'Event Grant ':
          response = await axios.get("http://localhost:3000/api/v1/Institute/event-grants");
          console.log(response.data)
          setData(response.data.eventGrants);
          setColumn(EventGrantColumns);
          break;

        case 'Event Grant Organized':
          response = await axios.get("http://localhost:3000/api/v1/Institute/events-organised");
          console.log(response.data)
          setData(response.data.eventOrganised);
          setColumn(EventOrganziedColumns);
          break;

        case 'Institute Documents':
          response = await axios.get("http://localhost:3000/api/v1/Institute/documents");
          console.log(response.data)
          setData(response.data.instituteDocuments);
          setColumn(InstituteDocumentsColumns);
          break;

        default:
          setData([]);
          setColumn([]);
          break;
      }
    } catch (error) {
      console.error(`Error fetching ${selectedTab} data:`, error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (tab) {
      fetchDataByTab(tab);
    }

    console.log(filterText)
  }, [tab]);


  const FilteringComponent = () => {

    const filteredItems = data.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()) || item.department && item.department.toLowerCase().includes(filterText.toLowerCase()));
    // can add more filters to this manually or think about more options
    // can go with search woth department faculty Name, ID etc.
    return (
      <>
        <DataTable data={filteredItems} columns={column} />
      </>
    )
  }


  return (
    <div>
      <SearchBar placeholder={"Search ..."} onChange={(e) => setFiltertext(e.target.value)} value={filterText} />
      <br />
      <div className="flex flex-wrap justify-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
        {tabs.map(({ label }) => (
          <button key={label} onClick={() => setTab(label)}>
            <div className={`px-4 py-2 rounded-full transition-colors duration-200 ${tab === label
              ? "bg-blue-600 text-white"
              : "bg-white text-black hover:bg-blue-300"
              }`}>
              {label}
            </div>
          </button>
        ))}
      </div>

      {/* Display loading or table */}
      <div className="mt-6">
        {loading ? (
          <div className="text-center py-8 text-blue-600 font-semibold">Loading...</div>
        ) : (
          data && column && (
            <DataTable columns={column} data={data} />
          )
        )}
      </div>
    </div>
  );
};

export default Institute;

export const MouColumns = [
  { name: "Agency Name", selector: row => row.agencyName, sortable: true },
  { name: "Date", selector: row => row.date, sortable: true },
  { name: "Duration", selector: row => row.duration },
  { name: "Description", selector: row => row.description, wrap: true },
  { name: "Funding", selector: row => row.funding },
  {
    name: "MOU PDF",
    cell: row => (
      <a href={row.mouPdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
];

export const ConsultancyColumns = [
  { name: "Agency Name", selector: row => row.agencyName, sortable: true },
  { name: "Date", selector: row => row.date, sortable: true },
  { name: "Duration", selector: row => row.duration },
  { name: "Description", selector: row => row.description, wrap: true },
  { name: "Funding", selector: row => row.funding },
  {
    name: "PDF",
    cell: row => (
      <a href={row.pdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
];
export const RDColumns = [
  { name: "AGENCY NAME", selector: row => row.agencyName, sortable: true },
  { name: "DATE", selector: row => row.date, sortable: true },
  { name: "DURATION", selector: row => row.duration },
  { name: "DISCRIPTION", selector: row => row.description, wrap: true }, // spelling as per your header
  { name: "FUNDING", selector: row => row.funding },
  {
    name: "PDF",
    cell: row => (
      <a href={row.pdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
];
export const EventGrantColumns = [
  { name: "EVENT NAME", selector: row => row.eventName, sortable: true },
  { name: "TYPE OF THE EVENT", selector: row => row.eventType },
  { name: "AGENCY NAME", selector: row => row.agencyName },
  { name: "DATE", selector: row => row.date },
  { name: "DURATION", selector: row => row.duration },
  { name: "DISCRIPTION", selector: row => row.description, wrap: true }, // keeping your spelling
  { name: "FUNDING", selector: row => row.funding },
  {
    name: "PDF",
    cell: row => (
      <a href={row.pdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
];
export const EventOrganziedColumns = [
  { name: "EVENT NAME", selector: row => row.eventName, sortable: true },
  { name: "TYPE OF THE EVENT", selector: row => row.eventType },
  { name: "AGENCY NAME", selector: row => row.agencyName },
  { name: "CATEGORY", selector: row => row.category },
  { name: "NUMBER OF PARTICIPANTS", selector: row => row.numberOfParticipants },
  { name: "DATE", selector: row => row.date },
  { name: "DURATION", selector: row => row.duration },
  { name: "DISCRIPTION", selector: row => row.discription, wrap: true }, // use description if your data has correct spelling
  { name: "FUNDING", selector: row => row.funding },
  {
    name: "PDF",
    cell: row => (
      <a href={row.pdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
];

export const InstituteDocumentsColumns = [
  {
    name: "AICTE AFFILIATION PDF",
    cell: row => (
      <a href={row.aictePdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
  {
    name: "RGPV PDF",
    cell: row => (
      <a href={row.rgpvPdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
  {
    name: "SOCIETY PDF",
    cell: row => (
      <a href={row.societyPdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
  {
    name: "BY LAWS PDF",
    cell: row => (
      <a href={row.byLawsPdf} target="_blank" rel="noopener noreferrer">
        View PDF
      </a>
    ),
  },
];
