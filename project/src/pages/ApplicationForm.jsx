import { useState } from "react";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    sector: "",
    description: "",
    investment: "",
    location: "",
  });

  const sectors = [
    "Technology",
    "Manufacturing",
    "Agriculture",
    "Healthcare",
    "Education",
    "Retail",
    "Services",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement application submission logic
    console.log("Application submitted:", formData);
    await fetch(" http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData ),
    })
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => console.log("Success:", data)) // Handle success
      .catch((error) => console.error("Error:", error)); // Handle errors
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Business Application Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Business Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Sector</label>
                <select
                  className="form-select"
                  value={formData.sector}
                  onChange={(e) =>
                    setFormData({ ...formData, sector: e.target.value })
                  }
                  required
                >
                  <option value="">Select a sector</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Business Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Investment Amount ($)</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.investment}
                  onChange={(e) =>
                    setFormData({ ...formData, investment: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
