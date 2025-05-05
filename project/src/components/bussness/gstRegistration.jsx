// Updated GstRegistrationPage.jsx with inline step indicator and buttons
import { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Alert,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function GstRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessPan: "",
    businessType: "",
    businessActivity: "",
    turnover: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    signatoryName: "",
    signatoryDob: "",
    signatoryFatherName: "",
    signatoryAadhaar: "",
    signatoryEmail: "",
    signatoryMobile: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branchName: "",
    panCard: "",
    aadhaarCard: "",
    addressProof: "",
    bankStatement: "",
    incorporation: "",
    declarationAgreed: false,
  });
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    "Business Details",
    "Address Details",
    "Authorized Signatory",
    "Bank Details",
    "Document Upload",
    "Review & Submit",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] ? files[0].name : "" });
  };

  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  const handleNext = () => {
    const form = document.getElementById(`gst-step${currentStep}Form`);
    if (form.checkValidity()) {
      setValidated(false);
      setCurrentStep((prev) => prev + 1);
    } else {
      setValidated(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById(`gst-step${currentStep}Form`);
    if (form.checkValidity()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 2000);
    } else {
      setValidated(true);
    }
  };

  return (
    <Container className="py-5">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/BusinessDashboard" }}>
          Business Registration
        </Breadcrumb.Item>
        <Breadcrumb.Item active>GST Registration</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="mb-4 fw-bold">GST Registration</h1>

      {submitSuccess ? (
        <Alert variant="success" className="mb-4">
          <Alert.Heading>Application Submitted Successfully!</Alert.Heading>
          <p>
            Your application number is{" "}
            <strong>GST-{Math.floor(100000 + Math.random() * 900000)}</strong>.
          </p>
          <p>You will receive a confirmation email shortly.</p>
          <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-outline-success">
              Back to Home
            </Link>
          </div>
        </Alert>
      ) : (
        <>
          {/* Inline Step Indicator */}
          <div className="d-flex justify-content-between mb-4">
            {steps.map((label, index) => {
              const stepNum = index + 1;
              return (
                <div
                  key={label}
                  className={`text-center flex-fill px-2 ${
                    stepNum < currentStep
                      ? "text-success"
                      : stepNum === currentStep
                      ? "fw-bold text-primary"
                      : "text-muted"
                  }`}
                >
                  <div className="step-circle mb-1">{stepNum}</div>
                  <small>{label}</small>
                </div>
              );
            })}
          </div>

          {/* Main Step Forms (Step 1 shown as example) */}
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4">
              {currentStep === 1 && (
                <Form id="gst-step1Form" noValidate validated={validated}>
                  <h4 className="mb-4">Business Information</h4>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Business Name*</Form.Label>
                        <Form.Control
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your business name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Business PAN*</Form.Label>
                        <Form.Control
                          type="text"
                          name="businessPan"
                          value={formData.businessPan}
                          onChange={handleInputChange}
                          required
                          maxLength="10"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter valid PAN.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* Add more fields similarly */}
                </Form>
              )}
              {currentStep === 2 && (
                <Form id="gst-step2Form" noValidate validated={validated}>
                  <h4 className="mb-4">Address Details</h4>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Address*</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>City*</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter city.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>State*</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter state.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Pincode*</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          maxLength="6"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter valid pincode.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              )}

              {/* Inline Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                )}
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                )}
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default GstRegistrationPage;
