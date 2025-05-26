import { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { toast } from 'react-toastify';
import ApplicationTable from "../ApplicationTable";
import { mockApplications } from "../../data/mockData";


const Gst = () => {
  const [applications, setApplications] = useState(mockApplications.gstRegistration);

  const handleApprove = (id) => {
    setApplications(prevApplications => 
      prevApplications.map(app => 
        app.id === id ? { ...app, status: 'Approved', updatedAt: new Date().toISOString() } : app
      )
    );
    toast.success('GST Registration approved successfully!');
  };

  const handleReject = (id) => {
    setApplications(prevApplications => 
      prevApplications.map(app => 
        app.id === id ? { ...app, status: 'Rejected', updatedAt: new Date().toISOString() } : app
      )
    );
    toast.error('GST Registration rejected.');
  };

  return (
    <Container fluid>
      <ApplicationTable 
        applications={applications}
        onApprove={handleApprove}
        onReject={handleReject}
        title="GST Registration Applications"
      />
    </Container>
  );
};

export default Gst;
