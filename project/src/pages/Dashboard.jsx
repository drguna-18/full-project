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
    name: "",
    email: "",
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
    <Container>
      {/* <Sidebar/> */}

      <div>
      
        <div className="Dash">
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
              <StatusCard
                title="GST"
                status={cardStatuses.gst}
                icon="receipt"
              />
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
    </div>
    </Container>
  );
}

export default Dashboard;
