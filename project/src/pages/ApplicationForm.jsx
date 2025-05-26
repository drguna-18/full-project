import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";

function ApplicationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    sector: "",
    address: "",
    contactNumber: "",
    documents: null,
    InvestmentAmount: "",
    firstTimeFounder: "",
    name: "",
    email: "",
    founderPhone: "",
    socialProfile: "",
    founderAddress: "",
    nationality: "",
    founderPhoto: null,
    aadharNo: "",
    aadharPdf: null,
  });

  

  useEffect(() => {
    const currentUser = localStorage.getItem("userCheck");
    // Uncomment to enable login protection
    // if (currentUser !== "loggedIn") navigate("/login");
  }, []);

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    // Append all text fields except files
    Object.keys(formData).forEach((key) => {
      if (
        key !== "documents" &&
        key !== "founderPhoto" &&
        key !== "aadharPdf"
      ) {
        form.append(key, formData[key]);
      }
    });

    // Append documents (multi-file upload)
    if (formData.documents && formData.documents.length > 0) {
      Array.from(formData.documents).forEach((file) => {
        form.append("documents", file);
        console.log(form);
        
      });
    }

    // Append founder photo
    if (formData.founderPhoto) {
      form.append("founderPhoto", formData.founderPhoto);
    }

    // Append Aadhar PDF
    if (formData.aadharPdf) {
      form.append("aadharPdf", formData.aadharPdf);
    }
    console.log(formData);
    
if (formData.aadharNo && !/^\d{12}$/.test(formData.aadharNo)) {
  alert("Aadhar number must be a 12-digit number.");
  return;
}

    

    try {
      const response = await axios.post("http://localhost:5000/api/data", form);

      
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form");
    }finally{
      navigate("/businessDashboard")
    }

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
                    onChange={handleFileChange}
                    required
                  />
                  <Form.Text className="text-muted">
                        Only PDF format. Max size: 2MB.
                      </Form.Text>
                    </Form.Group>

                <div className="mb-3">
                  <Form.Label className="fw-bold">
                    Are you a first-time founder?
                  </Form.Label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="firstTimeFounder"
                      value="Yes"
                      checked={formData.firstTimeFounder === "Yes"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstTimeFounder: e.target.value,
                        })
                      }
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="firstTimeFounder"
                      value="No"
                      checked={formData.firstTimeFounder === "No"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstTimeFounder: e.target.value,
                        })
                      }
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>

                {formData.firstTimeFounder === "Yes" && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        value={formData.founderPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            founderPhone: e.target.value,
                          })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Social Profile</Form.Label>
                      <Form.Control
                        type="url"
                        value={formData.socialProfile}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            socialProfile: e.target.value,
                          })
                        }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Founder Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={formData.founderAddress}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            founderAddress: e.target.value,
                          })
                        }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Nationality</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.nationality}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            nationality: e.target.value,
                          })
                        }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Founder Photo</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            founderPhoto: e.target.files[0],
                          })
                        }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Aadhar No</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.aadharNo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            aadharNo: e.target.value,
                          })
                        }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Upload Aadhar (PDF)</Form.Label>
                      <Form.Control
                        type="file"
                        accept="application/pdf"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            aadharPdf: e.target.files[0],
                          })
                        }
                        required
                      />
                      <Form.Text className="text-muted">
                        Only PDF format. Max size: 2MB.
                      </Form.Text>
                    </Form.Group>
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
