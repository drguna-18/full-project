import React, { useState } from "react";

const EnvironmentalClearance = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name] ? [...prev[name], value] : [value],
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form className="container py-4" onSubmit={handleSubmit}>
      <h2 className="mb-4">Environmental Clearance Form</h2>

      {step === 1 && (
        <div>
          <h4>Step 1: Project Details</h4>
          <div className="mb-6">
            <label className="form-label">Project Name</label>
            <input
              type="text"
              className="form-control"
              name="projectName"
              value={formData.projectName || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="form-label">Project Type</label>
            <select
              className="form-select"
              name="projectType"
              value={formData.projectType || ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select project type</option>
              <option value="mining">Mining</option>
              <option value="industry">Industry/Manufacturing</option>
              <option value="construction">Construction/Real Estate</option>
              <option value="township">Township/Area Development</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="thermal">Thermal Power Plant</option>
              <option value="nuclear">Nuclear Power Plant</option>
              <option value="processing">Processing Industry</option>
              <option value="chemical">Chemical Industry</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="form-label">Project Description</label>
            <textarea
              className="form-control"
              name="projectDescription"
              value={formData.projectDescription || ""}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4>Step 2: Environmental Impact Assessment</h4>
          <div className="mb-3">
            <label className="form-label">Land Use Pattern</label>
            <select
              className="form-select"
              name="landUse"
              value={formData.landUse || ""}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select land use</option>
              <option value="agricultural">Agricultural Land</option>
              <option value="forest">Forest Land</option>
              <option value="industrial">Industrial Zone</option>
              <option value="commercial">Commercial Zone</option>
              <option value="residential">Residential Area</option>
              <option value="coastal">Coastal Area</option>
              <option value="wetland">Wetland Area</option>
              <option value="barren">Barren Land</option>
              <option value="mixed">Mixed Land Use</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Water Requirement (KLD)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              name="waterRequirement"
              value={formData.waterRequirement || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Power Requirement (MW)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              name="powerRequirement"
              value={formData.powerRequirement || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Land Requirement (Hectares)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              name="landRequirement"
              value={formData.landRequirement || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h4>Step 3: Compliance Measures</h4>
          <div className="mb-3">
            <label className="form-label">Air Pollution Control Measures</label>
            <textarea
              className="form-control"
              name="airPollutionControl"
              value={formData.airPollutionControl || ""}
              onChange={handleChange}
              rows="2"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Water Pollution Control Measures</label>
            <textarea
              className="form-control"
              name="waterPollutionControl"
              value={formData.waterPollutionControl || ""}
              onChange={handleChange}
              rows="2"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Solid & Hazardous Waste Management</label>
            <textarea
              className="form-control"
              name="wasteManagement"
              value={formData.wasteManagement || ""}
              onChange={handleChange}
              rows="2"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Noise Management Measures</label>
            <textarea
              className="form-control"
              name="noiseManagement"
              value={formData.noiseManagement || ""}
              onChange={handleChange}
              rows="2"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Green Belt Development Plan</label>
            <textarea
              className="form-control"
              name="greenBelt"
              value={formData.greenBelt || ""}
              onChange={handleChange}
              rows="2"
              required
            ></textarea>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4>Step 4: Upload Documents</h4>
          <div className="mb-3">
            <label className="form-label">Project Report (PDF)</label>
            <input
              type="file"
              className="form-control"
              name="projectReport"
              onChange={handleChange}
              accept=".pdf"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Layout Plan (PDF/Image)</label>
            <input
              type="file"
              className="form-control"
              name="layoutPlan"
              onChange={handleChange}
              accept=".pdf,.jpg,.jpeg,.png"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Land Documents (PDF)</label>
            <input
              type="file"
              className="form-control"
              name="landDocuments"
              onChange={handleChange}
              accept=".pdf"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Company Registration Certificate (PDF)</label>
            <input
              type="file"
              className="form-control"
              name="companyRegistration"
              onChange={handleChange}
              accept=".pdf"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Authorization Letter (PDF)</label>
            <input
              type="file"
              className="form-control"
              name="authorizationLetter"
              onChange={handleChange}
              accept=".pdf"
              required
            />
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h4>Step 5: Review & Submit</h4>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}

      <div className="d-flex justify-content-between mt-4">
        {step > 1 && (
          <button type="button" className="btn btn-secondary" onClick={prevStep}>
            Previous
          </button>
        )}
        {step < 5 && (
          <button type="button" className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 5 && (
          <button type="submit" className="btn btn-success">
            Submit Application
          </button>
        )}
      </div>
    </form>
  );
};

export default EnvironmentalClearance;
