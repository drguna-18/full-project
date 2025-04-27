import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import StatusCard from "../components/StatusCard";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

function Dashboard() {
  const [cardStatuses, setCardStatuses] = useState({
    tradeLicense: "Pending",
    gst: "Pending",
    documents: "Pending",
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const mockData = {
          tradeLicense: "Completed",
          gst: "Pending",
          documents: "Rejected",
        };
        setCardStatuses(mockData);
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };
    fetchStatuses();
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    // Clear auth/token here if needed
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
<<<<<<< HEAD
    <Container fluid>
      {/* Sidebar (Offcanvas) */}
      <Offcanvas
        show={showSidebar}
        onHide={toggleSidebar}
        placement="end"
        style={{ width: "250px" }} // Make sidebar smaller
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
=======
    <Container>
      {/* <Sidebar/> */}
      
      <div>
        <div className='Dash'>
      <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <p className="lead mb-5 text-muted" style={{marginTop:"1rem"}}>Monitor the status of your approvals.</p>
      
      <Row className="g-4">
        <Col md={4}>
          <StatusCard 
            title="Trade License" 
            status={cardStatuses.tradeLicense}
            icon="building"
>>>>>>> 515faa67af04cab4713b7a04502cf5c77ed187ca
          />
          <h5>{user.name}</h5>
          <p className="text-muted">{user.email}</p>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Dashboard */}
      <Row className="p-4">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="lead text-muted mb-4">
          Monitor the status of your approvals.
        </p>

        <Row className="g-4">
          <Col md={4}>
            <StatusCard
              title="Trade License"
              status={cardStatuses.tradeLicense}
              icon="building"
            />
          </Col>
          <Col md={4}>
            <StatusCard title="GST" status={cardStatuses.gst} icon="receipt" />
          </Col>
          <Col md={4}>
            <StatusCard
              title="Documents"
              status={cardStatuses.documents}
              icon="file-earmark-text"
            />
          </Col>
        </Row>
      </Row>
      </div>
    </Container>
  );
}

export default Dashboard;
