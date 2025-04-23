import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    sector: "",
    address: "",
    contactNumber: "",
    documents: "",
    InvestmentAmount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle business registration logic here
    console.log("Business registration:", formData);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Business Registration Form</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter business name"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Business Sector</Form.Label>
                  <Form.Select
                    value={formData.sector}
                    onChange={(e) =>
                      setFormData({ ...formData, sector: e.target.value })
                    }
                    required
                  >
                    <option value="">Select a sector</option>
                    <option value="technology">Technology</option>
                    <option value="retail">Retail</option>
                    <option value="food">Food & Beverage</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Business Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter business Description"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter contact number"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactNumber: e.target.value,
                      })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Investment Amount ($)</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter investment amount"
                    value={formData.InvestmentAmount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        InvestmentAmount: e.target.value,
                      })
                    }
                    required
                  />
                </Form.Group>
                

                <Form.Group className="mb-3">
                  <Form.Label>Upload Documents</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={(e) =>
                      setFormData({ ...formData, documents: e.target.files })
                    }
                    required
                  />
                  <Form.Text className="text-muted">
                    Please upload all required documents (ID proof, address
                    proof, etc.)
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <h3>founder details</h3>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter contact number"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactNumber: e.target.value,
                      })
                    }
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit Registration
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ApplicationForm;
