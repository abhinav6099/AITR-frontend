import React from 'react';
import SearchBar from '../components/SearchBar';




import { useEffect, useState } from 'react';
import axios from 'axios';

import DataTable from 'react-data-table-component';


const Faculty = () => {
  const [filterText, setFiltertext] = useState('');
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('');

  const tabs = [
    { label: 'Profile' },
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
        case 'Profile':
          response = await axios.get("http://localhost:3000/api/v1/faculty/profiles");
          console.log(response.data)
          setData(response.data.profiles);
          setColumn(facultyProfileColumn);
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
            <FilteringComponent />
          )
        )}
      </div>
    </div>
  );
};

export default Faculty;



// columns

export const facultyProfileColumn = [
  {
    name: 's.no',
    selector: row => row.id,
    sortable: true,
    width: '80px',
    cell: (row ,index) => index + 1 
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true,
  },
  {
    name: 'Mobile No',
    selector: row => row.mobileNumber,
    sortable: true,
  },
  {
    name: 'Experience (Years)',
    selector: row => row.teachingExperience,
    sortable: true,

  },
  {
    name: 'Designation',
    selector: row => row.designation,
    sortable: true,
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button
          onClick={() => alert(`Viewing program ${row.Id}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
        >
          View
        </button>
        <button
          onClick={() => alert(`Editing program ${row.Id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting program ${row.Id}`)}
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export const facultyResearchPaperColumn = [
  {
    name: 'ID',
    selector: row => row.facultyId,
    sortable: true,
    center: true
  },
  {
    name: 'Faculty Name',
    selector: row => row.facultyName,
    sortable: true
  },
  {
    name: 'Title of Paper',
    selector: row => row.titleOfPaper,
    sortable: true,
    wrap: true
  },
  {
    name: 'Publication Date',
    selector: row => row.publicationDate,
    format: row => new Date(row.publicationDate).toLocaleDateString()
  },
  {
    name: 'Journal/Conference Name',
    selector: row => row.journalOrConferenceName,
    wrap: true
  },
  {
    name: 'Co-Author',
    selector: row => row.coAuthors,
    wrap: true
  },
  {
    name: 'Indexing',
    selector: row => row.indexing,
    wrap: true
  },
  {
    name: 'Paper PDF',
    selector: row => row.paperPdf,
    cell: row => (
      <a
        href={row.paperPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View PDF
      </a>
    )
  },
  {
    name: 'ISSN Number',
    selector: row => row.issnNumber
  },
  {
    name: 'DOI Link',
    selector: row => row.doiLink,
    cell: row => (
      <a
        href={row.doiLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        DOI
      </a>
    )
  },
  {
    name: 'Authors',
    selector: row => row.authors,
    cell: row =>
      Array.isArray(row.authors) ? row.authors.join(', ') : row.authors
  },
  {
    name: 'ISSN/ISBN',
    selector: row => row.issnOrIsbn
  },
  {
    name: 'Department',
    selector: row => row.department
  }
];



export const facultyAwardsColumns = [
  {
    name: 'ID',
    selector: row => row.recipientId,
    sortable: true
  },
  {
    name: 'Recipient Name',
    selector: row => row.recipientName,
    sortable: true
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true
  },
  {
    name: 'Award Name',
    selector: row => row.awardName,
    sortable: true
  },
  {
    name: 'Issuing Organization',
    selector: row => row.issuingOrganization,
    sortable: true
  },
  {
    name: 'Date',
    selector: row => new Date(row.date).toLocaleDateString(),
    sortable: true
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true
  },
  {
    name: 'Event Name',
    selector: row => row.eventName,
    sortable: true
  },
  {
    name: 'Description/Purpose',
    selector: row => row.description,
    wrap: true
  },
  {
    name: 'Certificate PDF',
    cell: row => (
      <a
        href={`http://localhost:3000/file/${row.fileId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View
      </a>
    )
  },
  {
    name: 'Title of Award',
    selector: row => row.titleOfAward,
    sortable: true
  },
  {
    name: 'Level',
    selector: row => row.level,
    sortable: true
  },
  // {
  //   name: 'Supporting Document',
  //   cell: row => (
  //     <a
  //       href={row.supportingDocument}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       className="text-blue-600 underline"
  //     >
  //       View
  //     </a>
  //   )
  // }
];

export const facultyDevlopmentColumn = [
  { name: 'ID', selector: row => row.facultyId, sortable: true, width: '70px' },
  { name: 'Faculty Name', selector: row => row.facultyName, sortable: true },
  { name: 'department', selector: row => row.department, wrap: true },
  { name: 'FDP title', selector: row => row.fdpTitle },
  { name: 'Program Name', selector: row => row.programName },
  { name: 'Organising Institute', selector: row => row.organizingInstitute },

  { name: 'Start Date', selector: row => row.startDate },
  { name: 'End Date', selector: row => row.endDate },
  { name: 'Program Type', selector: row => row.programType },
  { name: 'Mode', selector: row => row.mode },
  { name: 'Location', selector: row => row.location },
  { name: 'No of days', selector: row => row.numberOfDays },
  
  {
    name: 'Certificate',
    cell: row => (
      <a
        href={`http://localhost:3000/file/${row.fileId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-sm"
      >
        View
      </a>
    ),
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button
          onClick={() => alert(`Viewing program ${row.Id}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
        >
          View
        </button>
        <button
          onClick={() => alert(`Editing program ${row.Id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting program ${row.Id}`)}
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

export const patentPublished = [
  { name: 'faculty Id', selector: row => row.facultyId, sortable: true, width: '70px' },
  { name: 'Faculty Name', selector: row => row.facultyName, sortable: true },
  { name: 'Department', selector: row => row.department, wrap: true },
  { name: 'title', selector: row => row.title },
  { name: 'Applicant', selector: row => row.applicant },
  { name: 'Application Number', selector: row => row.applicationNumber },
  { name: 'Application Number', selector: row => row.applicationNumber, wrap: true },
  { name: 'Application Date', selector: row => row.applicationDate },
  { name: 'Status', selector: row => row.status },
  { name: 'Co-Inventors', selector: row => row.coInventors },
  { name: 'Country', selector: row => row.country },
  { name: 'Category', selector: row => row.category },
  {
    name: 'Certificate',
    cell: row => (
      <a
        href={row.Certificate_Link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-sm"
      >
        View
      </a>
    ),
    
  },
  { name: 'Patent Title', selector: row => row.patnetTitle },
  { name: 'Patent Type', selector: row => row.patentType },
  { name: 'Inventors', selector: row => row.inventors },
  { name: 'Publication Date', selector: row => row.publicationDate },
  { name: 'Abstract', selector: row => row.abstract },


  {
    name: 'Actions',
    cell: row => (
      <div className="flex">
        <button
          onClick={() => alert(`Viewing patent ${row.Id}`)}
          className="bg-blue-500  hover:bg-blue-600 text-white text-xs px-5 py-4 rounded"
        >
          View
        </button>
        <button
          onClick={() => alert(`Editing patent ${row.Id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-5 py-4 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting patent ${row.Id}`)}
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-5 py-4 rounded"
        >
          Delete
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];


export const patentGrantedColumns = [
  {
    name: 'Patent Title',
    selector: row => row.patentTitle,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Inventors',
    selector: row => row.inventors?.join(', '),
    sortable: true,
    wrap: true,
  },
  {
    name: 'Grant Number',
    selector: row => row.grantNumber,
    sortable: true,
  },
  {
    name: 'Date of Grant',
    selector: row => (row.dateOfGrant),
    sortable: true,
  },
  {
    name: 'Country of Grant',
    selector: row => row.countryOfGrant,
    sortable: true,
  },
  {
    name: 'Application Number',
    selector: row => row.applicationNumber,
    sortable: true,
  }
];

export const professionalCertificationEarned = [
  {
    name: 'Faculty Name',
    selector: row => row.facultyName,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Certification Name',
    selector: row => row.certificationName,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Issuing Body',
    selector: row => row.issuingBody,
    sortable: true,
  },
  {
    name: 'Level',
    selector: row => row.certificationLevel,
    sortable: true,
  },
  {
    name: 'Validity Period',
    selector: row => row.validityPeriod,
    sortable: true,
  },
  {
    name: 'Field/Domain',
    selector: row => row.domain,
    sortable: true,
  },
  {
    name: 'Certificate',
    cell: row => (
      row.certificateUrl ? (
        <a
          href={row.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View PDF
        </a>
      ) : "N/A"
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  }
];



export const membershipColumn = [
    {
        name: 'Faculty Name',
        selector: row => row.facultyName,
        sortable: true,
    },
    {
        name: 'Organization Name',
        selector: row => row.organizationName,
        sortable: true,
        wrap: true,
    },
    {
        name: 'Membership Type',
        selector: row => row.membershipType,
        sortable: true,
    },
    {
        name: 'Membership ID',
        selector: row => row.membershipId,
        sortable: true,
    },
    {
        name: 'Date of Joining',
        selector: row => row.dateOfJoining,
        format: row => new Date(row.dateOfJoining).toLocaleDateString(),
        sortable: true,
    },
    {
        name: 'Current Status',
        selector: row => row.currentStatus,
        cell: row => (
            <span className={`px-2 py-1 rounded-full text-white text-xs ${row.currentStatus === 'Active' ? 'bg-green-600' : 'bg-gray-400'
                }`}>
                {row.currentStatus}
            </span>
        ),
        sortable: true,
    }
];

export const academicQualificationColumns = [
  {
    name: 'Highest Degree',
    selector: row => row.highestDegree,
    sortable: true,
    wrap: true,
  },
  {
    name: 'University/Institute',
    selector: row => row.universityOrInstitute,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Specialization',
    selector: row => row.specialization,
    sortable: true,
  },
  {
    name: 'Year of Completion',
    selector: row => row.yearOfCompletion,
    sortable: true,
  },
  {
    name: 'Certificate',
    cell: row => (
      row.certificateUrl ? (
        <a
          href={row.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View
        </a>
      ) : 'N/A'
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];



export const phdSupervisionColumns = [
  {
    name: 'Faculty Name',
    selector: row => row.facultyName,
    sortable: true,
    wrap: true,
  },
  {
    name: 'PhD Scholar Name',
    selector: row => row.phdScholarName,
    sortable: true,
    wrap: true,
  },
  {
    name: 'University Affiliation',
    selector: row => row.universityAffiliation,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    cell: row => (
      <span className={`px-2 py-1 rounded-full text-white text-xs ${
        row.status === 'Completed' ? 'bg-green-600' : 'bg-yellow-500'
      }`}>
        {row.status}
      </span>
    )
  },
  {
    name: 'Research Topic',
    selector: row => row.researchTopic,
    wrap: true,
  },
  {
    name: 'Date of Registration/Completion',
    selector: row => row.status === 'Completed' ? row.completionDate : row.registrationDate,
    format: row => {
      const date = row.status === 'Completed' ? row.completionDate : row.registrationDate;
      return date ? new Date(date).toLocaleDateString() : 'N/A';
    },
  },
];


export const researchProjectGuided = [
  { name: 'Student Name', selector: row => row.studentName, sortable: true },
  { name: 'Enrollment Number', selector: row => row.enrollmentNumber, wrap: true },
  { name: 'Branch', selector: row => row.branch },
  { name: 'Batch', selector: row => row.batch },
  { name: 'doiOrIsbn', selector: row => row.doiOrIsbn, wrap: true },
  { name: 'title Of Paper', selector: row => row.titleOfPaper },
  { name: 'Publication Date', selector: row => row.publicationDate },
  { name: 'journal Or Conference Name', selector: row => row.journalOrConferenceName },
  { name: 'cCo Authors', selector: row => row.coAuthors },
  { name: 'indexing', selector: row => row.indexing },
  { name: 'PDF', selector: row => row.fileId },
  { name: 'Faculty Guide', selector: row => row.facultyGuide },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing ${row.Title}`)} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">View</button>
        <button onClick={() => alert(`Editing ${row.Id}`)} className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Edit</button>
        <button onClick={() => alert(`Deleting ${row.Id}`)} className="bg-red-500 text-white text-xs px-2 py-1 rounded">Delete</button>
      </div>
    ),
    button: true,
  },
];


export const invitedTalksColumn = [
  {
    name: 'Faculty Name',
    selector: row => row.facultyName,
    sortable: true
  },
  {
    name: 'Title of Talk/Session',
    selector: row => row.titleOfTalk,
    wrap: true
  },
  {
    name: 'Event Name',
    selector: row => row.eventName,
    wrap: true
  },
  {
    name: 'Organizing Body',
    selector: row => row.organizingBody
  },
  {
    name: 'Date',
    selector: row => row.date,
    format: row => new Date(row.date).toLocaleDateString()
  },
  {
    name: 'Nature of Engagement',
    selector: row => row.natureOfEngagement // Keynote / Panelist / Speaker
  },
  {
    name: 'Certificate',
    selector: row => row.fileId,
    cell: row => (
      <a
        href={row.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View
      </a>
    )
  }
];

export const booksChaptersColumns = [
  {
    name: 'Title of Book/Chapter',
    selector: row => row.title,
    wrap: true,
    sortable: true
  },
  {
    name: 'Publisher',
    selector: row => row.publisher,
    sortable: true
  },
  {
    name: 'ISBN',
    selector: row => row.isbn
  },
  {
    name: 'Year of Publication',
    selector: row => row.yearOfPublication,
    sortable: true
  },
  {
    name: 'Co-authors (if any)',
    selector: row => row.coAuthors?.join(', ') || 'N/A',
    wrap: true
  }
];


