import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Table, Nav, Modal } from 'react-bootstrap';
import { FaFileAlt, FaSearch, FaUpload, FaBuilding, FaCheckCircle, FaDownload, FaEye } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function BusinessDashboard() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeTab, setActiveTab] = useState('approvals');

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    setShowUploadModal(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'approvals':
        return (
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Required Approvals</h5>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary">
                  <FaDownload className="me-2" />Export
                </Button>
                <Button size="sm" variant="outline-primary">
                  <FaSearch className="me-2" />Filter
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>License Type</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ministry of Commerce</td>
                    <td>Business License</td>
                    <td>March 15, 2024</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <Button size="sm" variant="primary" className="me-2">Apply</Button>
                      <Button size="sm" variant="outline-primary">
                        <FaEye />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Environmental Agency</td>
                    <td>Environmental Clearance</td>
                    <td>March 20, 2024</td>
                    <td><span className="badge bg-success">Approved</span></td>
                    <td>
                      <Button size="sm" variant="outline-success" className="me-2">
                        <FaDownload className="me-1" />Download
                      </Button>
                      <Button size="sm" variant="outline-primary">
                        <FaEye />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        );

      case 'applications':
        return (
          <Card>
            <Card.Header>
              <h5 className="mb-0">License Applications</h5>
            </Card.Header>
            <Card.Body>
              <Form className="mb-4">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter business name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>License Type</Form.Label>
                      <Form.Select>
                        <option>Select license type</option>
                        <option>Business License</option>
                        <option>Environmental Clearance</option>
                        <option>Health Permit</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Business Category</Form.Label>
                      <Form.Select>
                        <option>Select category</option>
                        <option>Retail</option>
                        <option>Manufacturing</option>
                        <option>Services</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="Enter business location" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" className="mt-4">
                  <FaFileAlt className="me-2" />Submit Application
                </Button>
              </Form>
            </Card.Body>
          </Card>
        );

      case 'track':
        return (
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Application Status</h5>
              <Form.Control
                type="search"
                placeholder="Search applications..."
                className="w-auto"
              />
            </Card.Header>
            <Card.Body>
              <div className="status-tracker">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Application ID</th>
                      <th>Type</th>
                      <th>Submitted Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#APP001</td>
                      <td>Business License</td>
                      <td>2024-02-20</td>
                      <td><span className="badge bg-info">In Review</span></td>
                      <td>
                        <Button size="sm" variant="outline-primary" className="me-2">
                          <FaEye className="me-1" />View
                        </Button>
                        <Button size="sm" variant="outline-success">
                          <FaDownload className="me-1" />Download
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <nav className="navbar navbar-dark mb-4">
        <Container>
          <span className="navbar-brand mb-0 h1">Business Dashboard</span>
        </Container>
      </nav>

      <Container>
        <Row>
          <Col>
            <Nav variant="tabs" className="mb-4">
              <Nav.Item>
                <Nav.Link 
                  active={activeTab === 'approvals'}
                  onClick={() => setActiveTab('approvals')}
                >
                  Required Approvals
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  active={activeTab === 'applications'}
                  onClick={() => setActiveTab('applications')}
                >
                  Apply for Licenses
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  active={activeTab === 'track'}
                  onClick={() => setActiveTab('track')}
                >
                  Track Applications
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {renderContent()}
          </Col>
        </Row>

        <Button 
          variant="primary" 
          className="floating-upload-btn"
          onClick={() => setShowUploadModal(true)}
        >
          <FaUpload /> Upload Documents
        </Button>
      </Container>

      <Modal show={showUploadModal} onHide={() => setShowUploadModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpload}>
            <Form.Group className="mb-3">
              <Form.Label>Document Type</Form.Label>
              <Form.Select>
                <option>Select document type</option>
                <option>Business Registration</option>
                <option>Tax Certificate</option>
                <option>ID Proof</option>
                <option>Address Proof</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload File</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">
              <FaUpload className="me-2" />Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BusinessDashboard;