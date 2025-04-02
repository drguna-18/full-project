import { useState, useEffect } from 'react';

function ApplicationStatus() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // TODO: Fetch applications from backend
    const mockApplications = [
      {
        id: 1,
        businessName: 'Tech Startup',
        sector: 'Technology',
        status: 'pending',
        submittedDate: '2025-03-15'
      },
      {
        id: 2,
        businessName: 'Green Farm',
        sector: 'Agriculture',
        status: 'approved',
        submittedDate: '2025-03-14'
      }
    ];
    setApplications(mockApplications);
  }, []);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-success';
      case 'rejected':
        return 'bg-danger';
      default:
        return 'bg-warning';
    }
  };

  return (
    <div>
      <h2 className="mb-4">Application Status</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Sector</th>
              <th>Submitted Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.businessName}</td>
                <td>{app.sector}</td>
                <td>{app.submittedDate}</td>
                <td>
                  <span className={`badge ${getStatusBadgeClass(app.status)}`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationStatus;