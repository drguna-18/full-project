import React, { useState } from "react";
import { Container } from "react-bootstrap";
// import { toast } from "react-toastify";
import ApplicationTable from "../ApplicationTable";
import { mockApplications } from "../../data/mockData";

const Envc = () => {
  const [applications, setApplications] = useState(mockApplications.environmentalClearance);

  const handleApprove = (id) => {
    setApplications(prevApplications => 
      prevApplications.map(app => 
        app.id === id ? { ...app, status: 'Approved', updatedAt: new Date().toISOString() } : app
      )
    );
    toast.success('Environmental Clearance approved successfully!');
  };

  const handleReject = (id) => {
    setApplications(prevApplications => 
      prevApplications.map(app => 
        app.id === id ? { ...app, status: 'Rejected', updatedAt: new Date().toISOString() } : app
      )
    );
    toast.error('Environmental Clearance rejected.');
  };

  return (
    <Container fluid>
      <ApplicationTable 
        applications={applications}
        onApprove={handleApprove}
        onReject={handleReject}
        title="Environmental Clearance Applications"
      />
    </Container>
  );
};

export default Envc;
