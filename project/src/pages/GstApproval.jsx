import axios from "axios";
import { useState, useEffect } from "react";

const GstApproval = () => {
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLicenses() {
      try {
        const response = await axios.get("http://localhost:5000/api/getGstLicense");
        const unapprovedLicenses = response.data.filter((license) => !license.isApproved);
        setLicenses(unapprovedLicenses);
      } catch (error) {
        console.error("Error fetching GST licenses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLicenses();
  }, []);

  const approveLicense = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/approveGstLicense/${id}`);
      console.log(response.data.message);

      // Remove the approved license from the state
      setLicenses((prevLicenses) => prevLicenses.filter((license) => license.id !== id));
    } catch (error) {
      console.error("Error approving GST license:", error);
      alert("Approval failed. Please try again.");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Pending GST License Approvals</h2>
          <p className="lead text-muted">
            Review and approve pending GST license applications
          </p>
        </div>

        {loading ? (
          <div className="text-center">Loading licenses...</div>
        ) : licenses.length === 0 ? (
          <div className="text-center text-muted">No pending GST license applications.</div>
        ) : (
          <div className="row g-4">
            {licenses.map((license) => (
              <div className="col-lg-4 col-md-6" key={license.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{license.businessName}</h5>
                    <p><strong>Owner:</strong> {license.ownerName || "N/A"}</p>
                    <p><strong>City:</strong> {license.city || "N/A"}</p>
                    <p><strong>Submitted At:</strong> {new Date(license.submittedAt).toLocaleDateString()}</p>
                    <button
                      className="btn btn-success mt-3"
                      onClick={() => approveLicense(license.id)}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GstApproval;
