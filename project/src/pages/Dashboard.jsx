import { Container, Row, Col } from 'react-bootstrap';
import StatusCard from '../components/StatusCard';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [cardStatuses, setCardStatuses] = useState({
    tradeLicense: 'Pending',
    gst: 'Pending',
    documents: 'Pending'
  });

  useEffect(() => {
    // Here you would fetch the statuses from your backend
    // For now using mock data
    const fetchStatuses = async () => {
      try {
        // Replace this with your actual API call
        const mockData = {
          tradeLicense: 'Completed',
          gst: 'Pending',
          documents: 'Rejected'
        };
        setCardStatuses(mockData);
      } catch (error) {
        console.error('Error fetching statuses:', error);
      }
    };

    fetchStatuses();
  }, []);

  return (
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
      </div>
    </Container>
  );
}

export default Dashboard;