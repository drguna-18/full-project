import React from "react";
import axios from "axios";

const TradeLicenseDetails = ({ data }) => {
  const {
    address,
    addressProof,
    businessActivity,
    businessName,
    businessProof,
    businessType,
    city,
    declarationAgreed,
    id,
    isApproved,
    nocFromOwner,
    ownerEmail,
    ownerIdDocument,
    ownerIdNumber,
    ownerIdProof,
    ownerName,
    ownerPhone,
    pincode,
    startDate,
    state,
    submittedAt,
  } = data;

  const approveLicense = async (id) => {
    const status = localStorage.setItem("status", "Approved");
    alert("Trade license is approved");
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/approveTradeLicense/${id}`
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error approving license:", error);
      alert("Approval failed. Please try again.");
    }
  };

  const deleteLicense = async (id) => {
    const status = localStorage.setItem("status", "Rejected");
    alert("Trade license has rejected");
    // try {

    //   const response = await axios.delete(`http://localhost:5000/api/deleteTradeLicense/${id}`);
    //   console.log(response.data.message);

    // } catch (error) {
    //   console.error("Error approving license:", error);
    //   alert("Approval failed. Please try again.");
    // }
  };

  const renderRow = (label, value, isFile = false) => (
    <div className="row mb-2">
      <div className="col-sm-4 fw-semibold">{label}</div>
      <div className="col-sm-8">
        {isFile ? (
          <a
            href={value} // actual file URL here
            download // prompts download instead of navigation
            target="_blank" // opens in new tab if browser decides
            rel="noopener noreferrer" // security best practice
            className="text-primary text-decoration-underline"
          >
            {value.split("/").pop() /* show filename only */}
          </a>
        ) : (
          <span>{value?.toString()}</span>
        )}
      </div>
    </div>
  );

  return (
    <div className="card shadow p-4 mx-auto my-4" style={{ maxWidth: "800px" }}>
      <h4 className="mb-4">Trade License Application</h4>
      {renderRow("Business Name", businessName)}
      {renderRow("Business Activity", businessActivity)}
      {renderRow("Business Type", businessType)}
      {renderRow("Start Date", startDate)}
      {renderRow("Business Proof", businessProof, true)}

      {renderRow("Owner Name", ownerName)}
      {renderRow("Owner Email", ownerEmail)}
      {renderRow("Owner Phone", ownerPhone)}
      {renderRow("Owner ID Proof Type", ownerIdProof)}
      {renderRow("Owner ID Number", ownerIdNumber)}
      {renderRow("Owner ID Document", ownerIdDocument, true)}

      {renderRow("Address", address)}
      {renderRow("City", city)}
      {renderRow("State", state)}
      {renderRow("Pincode", pincode)}
      {renderRow("Address Proof", addressProof, true)}

      {renderRow("NOC From Owner", nocFromOwner, true)}
      {renderRow(
        "Declaration Agreed",
        declarationAgreed === "true" ? "Yes" : "No"
      )}
      {renderRow("Approved", isApproved ? "Yes" : "No")}
      {renderRow("Submitted At", new Date(submittedAt).toLocaleString())}
      {renderRow("Application ID", id)}

      <div className="d-flex justify-content-end mt-4 gap-2">
        {!isApproved && (
          <button className="btn btn-danger" onClick={() => deleteLicense(id)}>
            Reject
          </button>
        )}
        {isApproved ? (
          <button
            className="btn btn-success"
            disabled={true}
            onClick={() => approveLicense(id)}
          >
            Approved
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => approveLicense(id)}
          >
            Approve
          </button>
        )}
      </div>
    </div>
  );
};

export default TradeLicenseDetails;
