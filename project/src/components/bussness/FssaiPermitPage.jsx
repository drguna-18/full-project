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
      {/* <h1>hello</h1> */}
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/businessDashboard" }}>
        Business Registration
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
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
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
                      <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
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
                      <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
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
                      <Form.Group controlId="pincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter pincode.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              )}

              {currentStep === 2 && (
                <Form id="fssai-step2Form" noValidate validated={validated}>
                  <h4 className="mb-4">Business Address</h4>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
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
                      <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
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
                      <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
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
                      <Form.Group controlId="pincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter pincode.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              )}

              {currentStep === 3 && (
                <Form id="fssai-step3Form" noValidate validated={validated}>
                  <h4 className="mb-4">Food Business Details</h4>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="fssaiCategory">
                        <Form.Label>FSSAI Category</Form.Label>
                        <Form.Control
                          type="text"
                          name="fssaiCategory"
                          value={formData.fssaiCategory}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter FSSAI category.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="annualTurnover">
                        <Form.Label>Annual Turnover</Form.Label>
                        <Form.Control
                          type="text"
                          name="annualTurnover"
                          value={formData.annualTurnover}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter turnover.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Food Categories</Form.Label>
                    {foodCategoryOptions.map((category, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        label={category}
                        value={category}
                        checked={formData.foodCategories.includes(category)}
                        onChange={handleFoodCategoryChange}
                      />
                    ))}
                  </Form.Group>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="productionCapacity">
                        <Form.Label>Production Capacity (per day)</Form.Label>
                        <Form.Control
                          type="text"
                          name="productionCapacity"
                          value={formData.productionCapacity}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="waterSource">
                        <Form.Label>Water Source</Form.Label>
                        <Form.Control
                          type="text"
                          name="waterSource"
                          value={formData.waterSource}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="storageType" className="mb-3">
                    <Form.Label>Storage Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="storageType"
                      value={formData.storageType}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Form>
              )}

              {currentStep === 4 && (
                <Form id="fssai-step4Form" noValidate validated={validated}>
                  <h4 className="mb-4">Applicant Information</h4>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="ownerName">
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="ownerDesignation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                          type="text"
                          name="ownerDesignation"
                          value={formData.ownerDesignation}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="ownerEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="ownerEmail"
                          value={formData.ownerEmail}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="ownerPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          name="ownerPhone"
                          value={formData.ownerPhone}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              )}

              {currentStep === 5 && (
                <Form id="fssai-step5Form" noValidate validated={validated}>
                  <h4 className="mb-4">Document Upload</h4>
                  <Form.Group controlId="addressProof" className="mb-3">
                    <Form.Label>Address Proof</Form.Label>
                    <Form.Control
                      type="file"
                      name="addressProof"
                      onChange={handleFileChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="identityProof" className="mb-3">
                    <Form.Label>Identity Proof</Form.Label>
                    <Form.Control
                      type="file"
                      name="identityProof"
                      onChange={handleFileChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="businessProof" className="mb-3">
                    <Form.Label>Business Proof</Form.Label>
                    <Form.Control
                      type="file"
                      name="businessProof"
                      onChange={handleFileChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="foodSafetyPlan" className="mb-3">
                    <Form.Label>Food Safety Plan</Form.Label>
                    <Form.Control
                      type="file"
                      name="foodSafetyPlan"
                      onChange={handleFileChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="medicalFitness" className="mb-3">
                    <Form.Label>Medical Fitness Certificate</Form.Label>
                    <Form.Control
                      type="file"
                      name="medicalFitness"
                      onChange={handleFileChange}
                      required
                    />
                  </Form.Group>
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
                  <Form.Check
                    type="checkbox"
                    label="I hereby declare that the information provided is true to the best of my knowledge."
                    name="declarationAgreed"
                    checked={formData.declarationAgreed}
                    onChange={handleInputChange}
                    required
                  />
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
