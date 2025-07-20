import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DepartmentTabs from '../components/DepartmentTabs';
import axios from 'axios';

import DataTable from 'react-data-table-component';

const Department = () => {
  const [filterText, setFiltertext] = useState('');
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('');

  const tabs = [
    { label: 'Consulancy Project' },
    { label: 'Research paper publication' },
    { label: 'Faculty Awards and Recognitions' },
    { label: 'Faculty Devlopment Program(FDPs Attended)' },
    { label: 'Patent Published' },
    { label: 'Patents Granted' },
    { label: 'Membership in Professional Bodies' },
    { label: 'Academic Qualifications Discipline' },
    { label: 'PhD Supervision / Guidances' },
    { label: 'Research Projects Guided' },
    { label: 'Invited Talks / Resource Person' },
    { label: 'Books / Chapters Authored' },
  ];
  
  const fetchDataByTab = async (selectedTab) => {
    setLoading(true);
    try {
      let response;
      switch (selectedTab) {
        case 'Consulancy Project':
          response = await axios.get("http://localhost:3000/api/v1/department/consultancies");
          console.log(response.data)
          setData(response.data.projects);
          setColumn(CounsultancyProjectColumn);
          break;

        case 'Research paper publication':
          response = await axios.get("http://localhost:3000/api/v1/faculty/research-papers");
          console.log(response.data)
          setData(response.data.papers);
          setColumn(facultyResearchPaperColumn);
          break;

        case 'Faculty Awards and Recognitions':
          response = await axios.get("http://localhost:3000/api/v1/faculty/award-recognitions");
          console.log(response.data)
          setData(response.data.data);
          setColumn(facultyAwardsColumns);
          break;

        case 'Faculty Devlopment Program(FDPs Attended)':
          response = await axios.get("http://localhost:3000/api/v1/faculty/development-programmes");
          console.log(response.data)
          setData(response.data.programs);
          setColumn(facultyDevlopmentColumn);
          break;

        case 'Patent Published':
          response = await axios.get("http://localhost:3000/api/v1/faculty/patents-published");
          console.log(response.data)
          setData(response.data.patents);
          setColumn(patentPublished);
          break;

        case 'Patents Granted':
          response = await axios.get("http://localhost:3000/api/v1/faculty/patents-granted");
          console.log(response.data)
          setData(response.data.patents);
          setColumn(patentGrantedColumns);
          // we dont have reaserach paper column here
          break;

        case 'Membership in Professional Bodies':
          response = await axios.get("http://localhost:3000/api/v1/faculty/faculty-membership");
          console.log(response.data)
          setData(response.data.facultyMembershipData);
          setColumn(membershipColumn);
          break;

        case 'Academic Qualifications Discipline':
          response = await axios.get("http://localhost:3000/api/v1/faculty/academic-qualifications");
          console.log(response.data)
          setData(response.data.qualifications);
          setColumn(academicQualificationColumns);
          break;

        case 'PhD Supervision / Guidances':
          response = await axios.get("http://localhost:3000/api/v1/faculty/phd-superviseds");
          console.log(response.data)
          setData(response.data.supervisions);
          setColumn(phdSupervisionColumns);
          break;

        case 'Research Projects Guided':
          response = await axios.get("http://localhost:3000/api/v1/faculty/research-projects-guided");
          console.log(response.data)
          setData(response.data.researchProjects);
          setColumn(invitedTalksColumn);

          // invited columns not defined
          break;

        case 'Invited Talks / Resource Person':
          response = await axios.get("http://localhost:3000/api/v1/faculty/invited-talks");
          console.log(response.data)
          setData(response.data.talks);
          setColumn(invitedTalksColumn);
          break;

        case 'Books / Chapters Authored':
        response = await axios.get("http://localhost:3000/api/v1/faculty/books-authored");
        console.log(response.data)
        setData(response.data.books);
        setColumn(booksChaptersColumns);
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
      <SearchBar placeholder={"Search ..."} onChange={ (e) => setFiltertext(e.target.value)} value={filterText}  />
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

export default Department;


export const CounsultancyProjectColumn = [
  { name: 'Department Name', selector: row => row.departmenatName, sortable: true },
  { name: 'Agency Name', selector: row => row.agencyName, sortable: true },
  { name: 'Date', selector: row => row.date, sortable: true },
  { name: 'Duration', selector: row => row.duration, sortable: true },
  { name: 'Description', selector: row => row.description, sortable: true },
  { name: 'Funding', selector: row => row.funding, sortable: true },
  { name: 'PDF', selector: row => row.pdf, cell: row => <a href={row.pdf} target="_blank" rel="noreferrer">View</a> },
  { name: 'Title of Consultancy', selector: row => row.titleOfConsultancy, sortable: true },
  { name: 'Client/Industry Partner', selector: row => row.clientOrIndustryPartner, sortable: true },
  { name: 'Faculty Lead', selector: row => row.facultyLead, sortable: true },
  { name: 'Amount Sanctioned', selector: row => row.amountSanctioned, sortable: true },
  { name: 'Supporting Documents', selector: row => row.supportingDocs, cell: row => <a href={row.supportingDocs} target="_blank" rel="noreferrer">Download</a> },
];
