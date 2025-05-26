import { Table, Button } from 'react-bootstrap';

const ApplicationTable = ({ applications, onApprove, onReject, title ,onView}) => {
  return (
    <div className="my-4">
      <h3>{title}</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Applicant Name</th>
            <th>Business Name</th>
            <th>Status</th>
            <th>Submitted At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.
ownerName}</td>
              <td>{app.businessName}</td>
              <td>{app.isApproved === true ? "Approved" : "Not Approved"}</td>
              <td>{new Date(app.submittedAt).toLocaleString()}</td>
              <td>{app.
submittedAt
 ? new Date(app.
submittedAt
).toLocaleString() : '-'}</td>
              <td>
                {/* <Button variant="success" size="sm" onClick={() => onApprove(app.id)} disabled={app.status !== 'Pending'}>
                  Approve
                </Button>{' '}
                <Button variant="danger" size="sm" onClick={() => onReject(app.id)} disabled={app.status !== 'Pending'}>
                  Reject
                </Button> */}
                <Button variant="success" size="sm" onClick={() => onView(app.id)}>
                  View
                </Button>{' '}
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ApplicationTable;
