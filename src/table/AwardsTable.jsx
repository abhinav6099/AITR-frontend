import React from 'react';
import DataTable from 'react-data-table-component';

// Columns Definition
const columns = [
  {
    name: 'ID',
    selector: row => row.id,
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
        href={row.certificatePdf}
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
  {
    name: 'Supporting Document',
    cell: row => (
      <a
        href={row.supportingDocument}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View
      </a>
    )
  }
];


// Sample Data
const sampleData = [
  {
    id: "AWD001",
    recipientName: "Dr. Asha Mehta",
    department: "Electronics",
    awardName: "Young Innovator Award",
    issuingOrganization: "IEI",
    date: "2023-08-12",
    category: "Research",
    eventName: "Tech Excellence Summit",
    description: "Awarded for outstanding contributions in VLSI Design.",
    certificatePdf: "/certificates/asha-innovator.pdf",
    titleOfAward: "Young Innovator",
    level: "National",
    supportingDocument: "/docs/asha-supporting.pdf"
  },
  {
    id: "AWD002",
    recipientName: "Prof. Rakesh Sharma",
    department: "Mechanical",
    awardName: "Best Mentor",
    issuingOrganization: "AICTE",
    date: "2022-12-01",
    category: "Teaching",
    eventName: "National Faculty Awards",
    description: "Mentored multiple winning student teams in national hackathons.",
    certificatePdf: "/certificates/rakesh-mentor.pdf",
    titleOfAward: "Best Mentor Award",
    level: "National",
    supportingDocument: "/docs/rakesh-support.pdf"
  },
  {
    id: "AWD003",
    recipientName: "Ms. Priya Kaur",
    department: "Computer Science",
    awardName: "Excellence in Teaching",
    issuingOrganization: "University Board",
    date: "2024-02-20",
    category: "Academic",
    eventName: "Annual Academic Conclave",
    description: "Recognized for consistent academic results and curriculum innovation.",
    certificatePdf: "/certificates/priya-excellence.pdf",
    titleOfAward: "Excellence in Teaching",
    level: "Institute",
    supportingDocument: "/docs/priya-evidence.pdf"
  }
];




// Component
const AwardTable = ({data}) => {
  return (
    <div className="p-4">
      <DataTable
        title="Faculty Awards"
        columns={columns}
        data={sampleData}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default AwardTable;
