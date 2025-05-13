// Full EnvironmentalClearancePage.jsx with all form steps inline and working navigation
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

function EnvironmentalClearancePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    projectCategory: "",
    projectType: "",
    projectCost: "",
    projectArea: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    latitude: "",
    longitude: "",
    waterRequirement: "",
    powerRequirement: "",
    wasteGeneration: "",
    pollutionControl: "",
    airImpact: "",
    waterImpact: "",
    noiseImpact: "",
    landImpact: "",
    mitigationMeasures: "",
    projectReport: "",
    landDocuments: "",
    locationMap: "",
    layoutPlan: "",
    declarationAgreed: false,
  });
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    "Project Information",
    "Location Details",
    "Project Specifics",
    "Environmental Impact",
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
    const form = document.getElementById(`env-step${currentStep}Form`);
    if (form.checkValidity()) {
      setValidated(false);
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setValidated(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById(`env-step${currentStep}Form`);
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Category*</Form.Label>
                  <Form.Control
                    type="text"
                    name="projectCategory"
                    value={formData.projectCategory}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Type*</Form.Label>
                  <Form.Select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="industrial">Industrial</option>
                    <option value="residential">Residential</option>
                    <option value="infrastructure">Infrastructure</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Cost (in Lakhs)*</Form.Label>
                  <Form.Control
                    type="number"
                    name="projectCost"
                    value={formData.projectCost}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 2:
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Address*</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City*</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>State*</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Pincode*</Form.Label>
                  <Form.Control
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 3:
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Water Requirement (litres/day)*</Form.Label>
                  <Form.Control
                    type="text"
                    name="waterRequirement"
                    value={formData.waterRequirement}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Power Requirement (kWh)*</Form.Label>
                  <Form.Control
                    type="text"
                    name="powerRequirement"
                    value={formData.powerRequirement}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Waste Generation (kg/day)*</Form.Label>
                  <Form.Control
                    type="text"
                    name="wasteGeneration"
                    value={formData.wasteGeneration}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Pollution Control Measures*</Form.Label>
                  <Form.Control
                    type="text"
                    name="pollutionControl"
                    value={formData.pollutionControl}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 4:
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Air Impact*</Form.Label>
                  <Form.Control
                    type="text"
                    name="airImpact"
                    value={formData.airImpact}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Water Impact*</Form.Label>
                  <Form.Control
                    type="text"
                    name="waterImpact"
                    value={formData.waterImpact}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Noise Impact*</Form.Label>
                  <Form.Control
                    type="text"
                    name="noiseImpact"
                    value={formData.noiseImpact}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Land Impact*</Form.Label>
                  <Form.Control
                    type="text"
                    name="landImpact"
                    value={formData.landImpact}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Mitigation Measures*</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mitigationMeasures"
                    value={formData.mitigationMeasures}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                  <Form.Control.Feedback type="invalid">
                    Required
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 5:
        return (
          <>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Report*</Form.Label>
                  <Form.Control
                    type="file"
                    name="projectReport"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Land Documents*</Form.Label>
                  <Form.Control
                    type="file"
                    name="landDocuments"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Location Map*</Form.Label>
                  <Form.Control
                    type="file"
                    name="locationMap"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Layout Plan*</Form.Label>
                  <Form.Control
                    type="file"
                    name="layoutPlan"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 6:
        return (
          <>
            <Row>
              <Col>
                <p>
                  <strong>Project Name:</strong> {formData.projectName}
                </p>
                <p>
                  <strong>Project Type:</strong> {formData.projectType}
                </p>
                <p>
                  <strong>Location:</strong> {formData.address}, {formData.city}
                  , {formData.state} - {formData.pincode}
                </p>
                <p>
                  <strong>Water Requirement:</strong>{" "}
                  {formData.waterRequirement}
                </p>
                <p>
                  <strong>Air Impact:</strong> {formData.airImpact}
                </p>
              </Col>
            </Row>
            <Form.Group controlId="declaration" className="mt-3">
              <Form.Check
                type="checkbox"
                label="I hereby declare that the information provided is true to the best of my knowledge."
                name="declarationAgreed"
                checked={formData.declarationAgreed}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                You must agree before submitting.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="py-5">
      <Breadcrumb className="mb-4">
        {/* <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/businessDashboard' }}>Home</Breadcrumb.Item> */}
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/BusinessDashboard" }}>
          Business Registration
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Environmental Clearance</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="mb-4 fw-bold">Environmental Clearance Application</h1>

      {submitSuccess ? (
        <Alert variant="success" className="mb-4">
          <Alert.Heading>Application Submitted Successfully!</Alert.Heading>
          <p>
            Your Environmental Clearance application has been submitted. Your
            application number is{" "}
            <strong>EC-{Math.floor(100000 + Math.random() * 900000)}</strong>.
          </p>
          <p>
            You will receive a confirmation email shortly. You can check the
            status of your application in your account dashboard.
          </p>
          <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-outline-success">
              Back to Home
            </Link>
          </div>
        </Alert>
      ) : (
        <>
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

          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4">
              <Form
                id={`env-step${currentStep}Form`}
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <h4 className="mb-4">{steps[currentStep - 1]}</h4>
                {renderStepContent()}

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
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default EnvironmentalClearancePage;
