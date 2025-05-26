import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaFileAlt, 
  FaMoneyBillWave, 
  FaLeaf, 
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf
} from 'react-icons/fa';
import { mockApplications } from '../data/mockData';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    tradeLicenses: { total: 0, pending: 0, approved: 0, rejected: 0 },
    gstRegistration: { total: 0, pending: 0, approved: 0, rejected: 0 },
    environmentalClearance: { total: 0, pending: 0, approved: 0, rejected: 0 }
  });

  useEffect(() => {
    // Calculate stats from mock data
    const newStats = {
      tradeLicenses: { total: 0, pending: 0, approved: 0, rejected: 0 },
      gstRegistration: { total: 0, pending: 0, approved: 0, rejected: 0 },
      environmentalClearance: { total: 0, pending: 0, approved: 0, rejected: 0 }
    };

    mockApplications.tradeLicenses.forEach(app => {
      newStats.tradeLicenses.total++;
      newStats.tradeLicenses[app.status.toLowerCase()]++;
    });

    mockApplications.gstRegistration.forEach(app => {
      newStats.gstRegistration.total++;
      newStats.gstRegistration[app.status.toLowerCase()]++;
    });

    mockApplications.environmentalClearance.forEach(app => {
      newStats.environmentalClearance.total++;
      newStats.environmentalClearance[app.status.toLowerCase()]++;
    });

    setStats(newStats);
  }, []);

  return (
    <Container fluid>
      <h1 className="page-title">Admin Dashboard</h1>
      
      <Row className="mb-4">
        <Col lg={4} md={6} className="mb-4">
          <Card className="dashboard-card h-100">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="card-title mb-0">Trade Licenses</h5>
                  <small className="text-muted">Manage business permits</small>
                </div>
                <div className="dashboard-card-icon">
                  <FaFileAlt />
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Applications</span>
                  <span className="fw-bold">{stats.tradeLicenses.total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaHourglassHalf className="text-warning me-1" /> Pending</span>
                  <span className="fw-bold">{stats.tradeLicenses.pending}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaCheckCircle className="text-success me-1" /> Approved</span>
                  <span className="fw-bold">{stats.tradeLicenses.approved}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaTimesCircle className="text-danger me-1" /> Rejected</span>
                  <span className="fw-bold">{stats.tradeLicenses.rejected}</span>
                </div>
              </div>
              <Link to="/Tl" className="btn btn-primary mt-auto">
                Manage Licenses
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="dashboard-card h-100">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="card-title mb-0">GST Registration</h5>
                  <small className="text-muted">Tax registration applications</small>
                </div>
                <div className="dashboard-card-icon">
                  <FaMoneyBillWave />
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Applications</span>
                  <span className="fw-bold">{stats.gstRegistration.total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaHourglassHalf className="text-warning me-1" /> Pending</span>
                  <span className="fw-bold">{stats.gstRegistration.pending}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaCheckCircle className="text-success me-1" /> Approved</span>
                  <span className="fw-bold">{stats.gstRegistration.approved}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaTimesCircle className="text-danger me-1" /> Rejected</span>
                  <span className="fw-bold">{stats.gstRegistration.rejected}</span>
                </div>
              </div>
              <Link to="/Gst" className="btn btn-primary mt-auto">
                Manage Registrations
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="dashboard-card h-100">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="card-title mb-0">Environmental Clearance</h5>
                  <small className="text-muted">Environmental compliance applications</small>
                </div>
                <div className="dashboard-card-icon">
                  <FaLeaf />
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Applications</span>
                  <span className="fw-bold">{stats.environmentalClearance.total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaHourglassHalf className="text-warning me-1" /> Pending</span>
                  <span className="fw-bold">{stats.environmentalClearance.pending}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaCheckCircle className="text-success me-1" /> Approved</span>
                  <span className="fw-bold">{stats.environmentalClearance.approved}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><FaTimesCircle className="text-danger me-1" /> Rejected</span>
                  <span className="fw-bold">{stats.environmentalClearance.rejected}</span>
                </div>
              </div>
              <Link to="/Envc" className="btn btn-primary mt-auto">
                Manage Clearances
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8} className="mb-4">
          <Card className="h-100">
            <Card.Header className="card-header-custom">
              <h5 className="mb-0">Application Overview</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-center p-3">
                  <FaChartLine className="text-primary mb-2" style={{ fontSize: '2rem' }} />
                  <h3>{stats.tradeLicenses.total + stats.gstRegistration.total + stats.environmentalClearance.total}</h3>
                  <p className="text-muted mb-0">Total Applications</p>
                </div>
                <div className="text-center p-3">
                  <FaHourglassHalf className="text-warning mb-2" style={{ fontSize: '2rem' }} />
                  <h3>{stats.tradeLicenses.pending + stats.gstRegistration.pending + stats.environmentalClearance.pending}</h3>
                  <p className="text-muted mb-0">Pending Review</p>
                </div>
                <div className="text-center p-3">
                  <FaCheckCircle className="text-success mb-2" style={{ fontSize: '2rem' }} />
                  <h3>{stats.tradeLicenses.approved + stats.gstRegistration.approved + stats.environmentalClearance.approved}</h3>
                  <p className="text-muted mb-0">Approved</p>
                </div>
                <div className="text-center p-3">
                  <FaTimesCircle className="text-danger mb-2" style={{ fontSize: '2rem' }} />
                  <h3>{stats.tradeLicenses.rejected + stats.gstRegistration.rejected + stats.environmentalClearance.rejected}</h3>
                  <p className="text-muted mb-0">Rejected</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Header className="card-header-custom">
              <h5 className="mb-0">User Statistics</h5>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <div className="text-center mb-4">
                <FaUsers className="text-secondary" style={{ fontSize: '3rem' }} />
              </div>
              <div className="mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <span>Total Users</span>
                  <span className="fw-bold">1,245</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>New This Month</span>
                  <span className="fw-bold">78</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Active Now</span>
                  <span className="fw-bold">23</span>
                </div>
              </div>
              <Link to="#" className="btn btn-outline-primary mt-auto">
                View User Details
              </Link>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default AdminDashboard;