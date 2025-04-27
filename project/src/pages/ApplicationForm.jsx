import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("userCheck");
    if (currentUser === "loggedIn") {
      console.log("Business registration:", formData);
    } else {
      navigate("/login");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle business registration logic here
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
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Are you a first-time founder?
                  </label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="firstTimeFounder"
                        id="founderYes"
                        value="Yes"
                        checked={formData.firstTimeFounder === "Yes"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstTimeFounder: e.target.value,
                          })
                        }
                      />
                      <label className="form-check-label" htmlFor="founderYes">
                        Yes
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="firstTimeFounder"
                        id="founderNo"
                        value="No"
                        checked={formData.firstTimeFounder === "No"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstTimeFounder: e.target.value,
                          })
                        }
                      />
                      <label className="form-check-label" htmlFor="founderNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {formData.firstTimeFounder === "Yes" && (
                  <>
                    <Form.Group className="mb-3">
                      <h3>Founder details</h3>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </Form.Group>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter phone number"
                        value={formData.founderPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            founderPhone: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Social Profile</label>
                      <input
                        type="url"
                        className="form-control"
                        placeholder="Any Social Profile Link"
                        value={formData.socialProfile}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            socialProfile: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        rows="2"
                        placeholder="Address"
                        value={formData.founderAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            founderAddress: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nationality</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Indian"
                        value={formData.nationality}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            nationality: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Founder Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            founderPhoto: e.target.files[0],
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Aadhar No</label>
                      <textarea
                        className="form-control"
                        rows="1"
                        placeholder="Aadhar No"
                        value={formData.aadharNo}
                        onChange={(e) =>
                          setFormData({ ...formData, aadharNo: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="aadharUpload"
                        className="form-label fw-bold"
                      >
                        Upload Aadhar (PDF)
                      </label>
                      <input
                        type="file"
                        className="form-control w-100"
                        id="aadharUpload"
                        accept="application/pdf"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            aadharPdf: e.target.files[0],
                          })
                        }
                        required
                      />
                      <div className="form-text text-muted">
                        Only PDF format is accepted. Max file size: 2MB.
                      </div>
                    </div>
                  </>
                )}

                <div className="d-flex justify-content-center mt-4">
                  <Button variant="primary" type="submit" className="w-50">
                    Submit Registration
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ApplicationForm;
