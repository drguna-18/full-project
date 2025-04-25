import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StatusIcon from './StatusIcon';
import { useState, useEffect } from 'react';
import './StatusCard.css';

function StatusCard({ title, status, icon }) {
  const [badgeClass, setBadgeClass] = useState(getStatusClass(status));
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    setBadgeClass(getStatusClass(status));
    
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [status]);

  function getStatusClass(status) {
    switch(status) {
      case 'Completed': return 'bg-success text-white';
      case 'Rejected': return 'bg-danger text-white';
      case 'Pending': 
      default: return 'bg-warning';
    }
  }

  return (
    <Card className={`dcard h-100 shadow-sm dard-transition ${animating ? 'pulse' : ''}`}>
      <Card.Body className="d-flex flex-column dcard-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Card.Title>{title}</Card.Title>
          <StatusIcon status={status} />
        </div>
        
        <div className="status-info">
          <h5>Status:</h5>
          <div className={`status-badge py-1 px-2 rounded ${badgeClass}`}>
            {status}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

StatusCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Pending', 'Completed', 'Rejected']).isRequired,
  icon: PropTypes.string
};

export default StatusCard;