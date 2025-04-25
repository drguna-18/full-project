// HealthForm.jsx - Full Form Code
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const HealthForm = ({ onSubmit }) => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    applicantName: '',
    contact: '',
    facilityAddress: '',
    typeOfBusiness: '',
    establishmentDate: '',
    idProof: '',
    medicalCertificate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0]?.name || '' : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setValidated(false);
      onSubmit();
    } else {
      setValidated(true);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Applicant Name</Form.Label>
            <Form.Control
              type="text"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid contact number.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Facility Address</Form.Label>
        <Form.Control
          type="text"
          name="facilityAddress"
          value={formData.facilityAddress}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter the facility address.
        </Form.Control.Feedback>
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Type of Business</Form.Label>
            <Form.Control
              type="text"
              name="typeOfBusiness"
              value={formData.typeOfBusiness}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter the type of business.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Date of Establishment</Form.Label>
            <Form.Control
              type="date"
              name="establishmentDate"
              value={formData.establishmentDate}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please select the date of establishment.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>ID Proof</Form.Label>
            <Form.Control
              type="file"
              name="idProof"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please upload your ID proof.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Medical Certificate</Form.Label>
            <Form.Control
              type="file"
              name="medicalCertificate"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please upload a medical certificate.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit">Submit Application</Button>
    </Form>
  );
};

export default HealthForm;
