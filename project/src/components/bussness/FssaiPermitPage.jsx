import { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Alert,
  Breadcrumb,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function FssaiPermitPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    fssaiCategory: "",
    annualTurnover: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    foodCategories: [],
    productionCapacity: "",
    waterSource: "",
    storageType: "",
    ownerName: "",
    ownerDesignation: "",
    ownerEmail: "",
    ownerPhone: "",
    addressProof: "",
    identityProof: "",
    businessProof: "",
    foodSafetyPlan: "",
    medicalFitness: "",
    declarationAgreed: false,
  });

  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const foodCategoryOptions = [
    "Dairy products",
    "Fruits and vegetables",
    "Confectionery",
    "Meat and meat products",
    "Fish and fish products",
    "Eggs and egg products",
    "Cereal and cereal products",
    "Bakery items",
    "Sweeteners",
    "Beverages",
    "Ready to eat foods",
    "Other",
  ];

  const steps = [
    "Business Information",
    "Business Address",
    "Food Business Details",
    "Applicant Information",
    "Document Upload",
    "Review & Submit",
  ];

  const totalSteps = steps.length;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFoodCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      foodCategories: checked
        ? [...prev.foodCategories, value]
        : prev.foodCategories.filter((item) => item !== value),
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0] ? files[0].name : "",
    });
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    const form = document.getElementById(`fssai-step${currentStep}Form`);
    if (form && form.checkValidity()) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setValidated(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById(`fssai-step${currentStep}Form`);
    if (form && form.checkValidity()) {
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
      <h1>hello</h1>
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/businessDashboard" }}>
          Home
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/registration" }}>
          Registration
        </Breadcrumb.Item> */}
        <Breadcrumb.Item active>FSSAI Permit</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="mb-4 fw-bold">FSSAI Permit Application</h1>

      {/* Progress bar */}
      <ProgressBar now={(currentStep / totalSteps) * 100} className="mb-4" />

      {/* Stepper Titles */}
      <div className="d-flex justify-content-center mb-4 flex-wrap">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`px-3 py-2 text-center ${
              currentStep === index + 1 ? "fw-bold text-primary" : "text-muted"
            }`}
          >
            <div style={{ fontSize: "14px" }}>Step {index + 1}</div>
            <div style={{ fontSize: "16px" }}>{step}</div>
          </div>
        ))}
      </div>

      {submitSuccess ? (
        <Alert variant="success" className="mb-4">
          <Alert.Heading>Application Submitted Successfully!</Alert.Heading>
          <p>
            Your application number is{" "}
            <strong>FSSAI-{Math.floor(100000 + Math.random() * 900000)}</strong>
            .
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
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4">
              {/* Different forms based on current step */}
              {currentStep === 1 && (
                <Form id="fssai-step1Form" noValidate validated={validated}>
                  <h4 className="mb-4">Business Information</h4>
                  {/* Business Information fields */}
                  {/* Example fields: */}
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="businessName">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter business name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="businessType">
                        <Form.Label>Business Type</Form.Label>
                        <Form.Select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select</option>
                          <option value="proprietorship">Proprietorship</option>
                          <option value="partnership">Partnership</option>
                          <option value="company">Company</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select business type.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              )}

              {currentStep === 2 && (
                <Form id="fssai-step2Form" noValidate validated={validated}>
                  <h4 className="mb-4">Business Address</h4>
                  {/* Business Address fields */}
                </Form>
              )}

              {currentStep === 3 && (
                <Form id="fssai-step3Form" noValidate validated={validated}>
                  <h4 className="mb-4">Food Business Details</h4>
                  {/* Food Business Details fields */}
                </Form>
              )}

              {currentStep === 4 && (
                <Form id="fssai-step4Form" noValidate validated={validated}>
                  <h4 className="mb-4">Applicant Information</h4>
                  {/* Applicant Information fields */}
                </Form>
              )}

              {currentStep === 5 && (
                <Form id="fssai-step5Form" noValidate validated={validated}>
                  <h4 className="mb-4">Document Upload</h4>
                  {/* Document Upload fields */}
                </Form>
              )}

              {currentStep === 6 && (
                <Form
                  id="fssai-step6Form"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <h4 className="mb-4">Review & Submit</h4>
                  {/* Review info */}
                </Form>
              )}

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between pt-3">
                {currentStep > 1 && (
                  <Button variant="secondary" onClick={handlePrevious}>
                    Previous
                  </Button>
                )}
                {currentStep < totalSteps ? (
                  <Button variant="primary" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

export default FssaiPermitPage;
