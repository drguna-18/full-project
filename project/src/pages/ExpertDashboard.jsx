import { useState, useEffect } from 'react';

function ExpertDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // TODO: Fetch pending applications from backend
    const mockApplications = [
      {
        id: 1,
        businessName: 'Tech Startup',
        sector: 'Technology',
        description: 'AI-powered solution for healthcare',
        investment: 500000,
        location: 'San Francisco',
        status: 'pending'
      }
    ];
    setApplications(mockApplications);
  }, []);

  const handleStatusUpdate = (id, status) => {
    // TODO: Implement status update logic
    console.log('Update application:', id, 'to status:', status);
  };

  return (
    <div>
      <h2 className="mb-4">Expert Review Dashboard</h2>
      <div className="row">
        {applications.map((app) => (
          <div key={app.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{app.businessName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{app.sector}</h6>
                <p className="card-text">{app.description}</p>
                <ul className="list-unstyled">
                  <li><strong>Investment:</strong> ${app.investment}</li>
                  <li><strong>Location:</strong> {app.location}</li>
                </ul>
                <div className="btn-group w-100">
                  <button
                    className="btn btn-success"
                    onClick={() => handleStatusUpdate(app.id, 'approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleStatusUpdate(app.id, 'rejected')}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertDashboard;