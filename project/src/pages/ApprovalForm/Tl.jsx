import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ApplicationTable from "../ApplicationTable";
import TradeLicenseDetails from "../TradeLicenseDetails";
import axios from "axios";

const Tl = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null); // ✅ should be null, not false
  const [selectedLicense,setSelectedLicense]= useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getTradeLicense');
        const data = response.data;
        setApplications(data);
      } catch (error) {
        console.error("Error fetching trade licenses:", error);
        toast.error("Failed to fetch trade license applications.");
      }
    };

    fetchApplications();
  }, []);

  const handleApprove = (id) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, status: 'Approved', updatedAt: new Date().toISOString() } : app
      )
    );
    toast.success('Application approved successfully!');
  };

  const handleReject = (id) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, status: 'Rejected', updatedAt: new Date().toISOString() } : app
      )
    );
    toast.error('Application rejected.');
  };

  // ✅ This is called when the user clicks "View"
  const handleView = (id) => {
    setSelectedApp(id);
    
    
   setSelectedLicense(applications.find(app => app.id ===id));
  };

  return (
    <Container fluid className="my-4">
      {!selectedApp ? (
        <ApplicationTable
          applications={applications}
          onView={handleView} // ✅ pass actual function
          title="Trade License Applications"
        />
      ) : (
        <>
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setSelectedApp(null)} // ✅ return to list
          >
            Back to List
          </button>
          <TradeLicenseDetails data={selectedLicense} />
        </>
      )}
    </Container>
  );
};

export default Tl;
