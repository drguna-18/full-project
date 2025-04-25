import { useState } from 'react';
import { Container, Form, Row, Col, Card, Alert, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TradeLicensePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '', businessType: '', businessActivity: '', startDate: '',
    address: '', city: '', state: '', pincode: '',
    ownerName: '', ownerEmail: '', ownerPhone: '', ownerIdProof: '', ownerIdNumber: '',
    addressProof: '', ownerIdDocument: '', businessProof: '', nocFromOwner: '',
    declarationAgreed: false
  });
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    "Business Information", 
    "Address Details", 
    "Owner Information", 
    "Document Upload", 
    "Review & Submit"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] ? files[0].name : '' });
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    const form = document.getElementById(`step${currentStep}Form`);
    if (form.checkValidity()) {
      setValidated(false);
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      setValidated(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById(`step${currentStep}Form`);
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
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/BusinessDashboard' }}>Business Registration</Breadcrumb.Item>
        {/* <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/registration' }}>Registration</Breadcrumb.Item> */}
        <Breadcrumb.Item active>Trade License</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="mb-4 fw-bold">Trade License Application</h1>

      {submitSuccess ? (
        <Alert variant="success" className="mb-4">
          <Alert.Heading>Application Submitted Successfully!</Alert.Heading>
          <p>Your application number is <strong>TL-{Math.floor(100000 + Math.random() * 900000)}</strong>.</p>
          <p>You will receive a confirmation email shortly.</p>
          <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-outline-success">Back to Home</Link>
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
                  className={`text-center flex-fill px-2 ${stepNum < currentStep ? 'text-success' : stepNum === currentStep ? 'fw-bold text-primary' : 'text-muted'}`}
                >
                  <div className="step-circle mb-1">{stepNum}</div>
                  <small>{label}</small>
                </div>
              );
            })}
          </div>

          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4">
              {currentStep === 1 && (
                <Form id="step1Form" noValidate validated={validated}>
                  <h4 className="mb-4">Business Information</h4>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Business Name*</Form.Label>
                        <Form.Control type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} required />
                        <Form.Control.Feedback type="invalid">Please enter your business name.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Business Type*</Form.Label>
                        <Form.Select name="businessType" value={formData.businessType} onChange={handleInputChange} required>
                          <option value="">Select Business Type</option>
                          <option value="proprietorship">Proprietorship</option>
                          <option value="partnership">Partnership</option>
                          <option value="llp">LLP</option>
                          <option value="pvtLtd">Private Ltd</option>
                          <option value="publicLtd">Public Ltd</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Please select a business type.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Business Activity*</Form.Label>
                        <Form.Select name="businessActivity" value={formData.businessActivity} onChange={handleInputChange} required>
                          <option value="">Select Activity</option>
                          <option value="retail">Retail</option>
                          <option value="wholesale">Wholesale</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="service">Service</option>
                          <option value="food">Food</option>
                          <option value="other">Other</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Please select a business activity.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Start Date*</Form.Label>
                        <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required />
                        <Form.Control.Feedback type="invalid">Please select the start date.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              )}

              {/* Other steps from 2 to 5 go here, structured the same way as step 1 */}

              {/* Inline Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4">
                {currentStep > 1 && (
                  <button type="button" className="btn btn-outline-secondary" onClick={handlePrevious}>Previous</button>
                )}
                {currentStep < steps.length ? (
                  <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                ) : (
                  <button type="submit" className="btn btn-success" disabled={isSubmitting} onClick={handleSubmit}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
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

export default TradeLicensePage;
