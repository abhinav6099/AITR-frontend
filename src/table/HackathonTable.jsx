import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.Id, width: '70px' },
  { name: 'Student Name', selector: row => row.Student_Name },
  { name: 'Enrollment Number', selector: row => row.Enrollment_Number },
  { name: 'Event Name', selector: row => row.Event_Name, wrap: true },
  { name: 'Date', selector: row => row.Date },
  { name: 'Team Name', selector: row => row.Team_Name },
  { name: 'Team Size', selector: row => row.Team_Size },
  { name: 'Mentor Name', selector: row => row.Mentor_Name },
  { name: 'Hackathon Type', selector: row => row.Hackathon_Type },
  { name: 'Organizing Body', selector: row => row.Organizing_Body },
  { name: 'Venue', selector: row => row.Venue },
  { name: 'Problem Statement', selector: row => row.Problem_Statement, wrap: true },
  { name: 'Technology Used', selector: row => row.Technology_Used },
  { name: 'Prize Money', selector: row => row.Prize_Money },
  { name: 'Sponsoring Company', selector: row => row.Sponsoring_Company },
  { name: 'Position', selector: row => row.Position },
  {
    name: 'Github',
    cell: row => (
      <a href={row.Project_Github_Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
        Repo
      </a>
    ),
  },
  { name: 'Project Description', selector: row => row.Project_Description, wrap: true },
  { name: 'Certificate Status', selector: row => row.Certificate_Status },
  {
    name: 'Certificate',
    cell: row => (
      <a href={row.Certificate_Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
        View
      </a>
    ),
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing event ${row.Id}`)} className="bg-blue-500 text-white px-2 py-1 text-xs rounded">View</button>
        <button onClick={() => alert(`Editing event ${row.Id}`)} className="bg-yellow-500 text-white px-2 py-1 text-xs rounded">Edit</button>
        <button onClick={() => alert(`Deleting event ${row.Id}`)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

// Sample Data
const data = [
  {
    Id: 1,
    Student_Name: 'Riya Sharma',
    Enrollment_Number: 'ENR2023CS101',
    Event_Name: 'Smart India Hackathon 2024',
    Date: '2024-04-15',
    Team_Name: 'TechTitans',
    Team_Size: 5,
    Mentor_Name: 'Dr. Ajay Sahani',
    Hackathon_Type: 'National',
    Organizing_Body: 'AICTE',
    Venue: 'IIT Kanpur',
    Problem_Statement: 'AI-driven student mental health monitoring',
    Technology_Used: 'React, Node.js, TensorFlow',
    Prize_Money: '₹50,000',
    Sponsoring_Company: 'TCS',
    Position: '1st',
    Project_Github_Link: 'https://github.com/techtitans/mental-health-ai',
    Project_Description: 'An AI-based solution to detect early signs of stress in students using voice and text input.',
    Certificate_Status: 'Verified',
    Certificate_Link: 'https://example.com/certificates/riya-hackathon.pdf',
  },
  {
    Id: 2,
    Student_Name: 'Aman Verma',
    Enrollment_Number: 'ENR2023IT122',
    Event_Name: 'Hack the Future 2023',
    Date: '2023-11-02',
    Team_Name: 'FutureBuilders',
    Team_Size: 4,
    Mentor_Name: 'Prof. Neha Mehta',
    Hackathon_Type: 'State',
    Organizing_Body: 'NASSCOM',
    Venue: 'IIIT Hyderabad',
    Problem_Statement: 'Real-time air quality tracking system',
    Technology_Used: 'IoT, Python, MongoDB',
    Prize_Money: '₹25,000',
    Sponsoring_Company: 'IBM',
    Position: 'Runner-Up',
    Project_Github_Link: 'https://github.com/futurebuilders/air-quality-tracker',
    Project_Description: 'Developed an IoT-based device and dashboard to monitor AQI in real-time.',
    Certificate_Status: 'Verified',
    Certificate_Link: 'https://example.com/certificates/aman-hackathon.pdf',
  },
  {
    Id: 3,
    Student_Name: 'Neha Singh',
    Enrollment_Number: 'ENR2023EE045',
    Event_Name: 'GreenHack 2024',
    Date: '2024-05-20',
    Team_Name: 'EcoWarriors',
    Team_Size: 3,
    Mentor_Name: 'Dr. Vikram Patel',
    Hackathon_Type: 'International',
    Organizing_Body: 'Greenpeace',
    Venue: 'Virtual',
    Problem_Statement: 'Smart compost bin with real-time nutrient tracking',
    Technology_Used: 'Arduino, ML, Firebase',
    Prize_Money: 'USD 1000',
    Sponsoring_Company: 'Google Sustainability',
    Position: '3rd',
    Project_Github_Link: 'https://github.com/ecowarriors/compost-ai',
    Project_Description: 'Smart bin prototype that analyzes waste and predicts compost quality.',
    Certificate_Status: 'Pending',
    Certificate_Link: 'https://example.com/certificates/neha-greenhack.pdf',
  },
];

const HackathonTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Hackathon Participation"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
};

export default HackathonTable;
