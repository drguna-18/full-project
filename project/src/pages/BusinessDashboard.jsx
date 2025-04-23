import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Container, Row, Col, Card, Button, Form, Table, Nav, Modal } from 'react-bootstrap';
// import { FaFileAlt, FaSearch, FaUpload, FaBuilding, FaCheckCircle, FaDownload, FaEye } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState('approvals');

  useEffect(() => {
    const links = document.querySelectorAll('[data-route]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        window.location.hash = route;
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'approvals':
        return (
          <>
            {/* Hero Section */}
            <section className="bg-primary text-white py-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1 className="display-4 fw-bold mb-4">Business Registration</h1>
                    <p className="lead mb-4">
                      Complete all your business compliance requirements in one place - trade license, GST registration, environmental clearance, and more.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <a href="#trade-license" className="btn btn-light btn-lg px-4 me-md-2" data-route="trade-license">Get Started</a>
                      <a href="#about" className="btn btn-outline-light btn-lg px-4">Learn More</a>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-5 mt-lg-0 text-center">
                    <img
                      src="https://placehold.co/600x400/3e92cc/ffffff?text=Business+Registration"
                      alt="Business Registration"
                      className="img-fluid rounded shadow-lg"
                      style={{ maxHeight: '400px' }}
                    />
                    <img src="project/src/assets/the.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Registration Services --> */}
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Registration Services</h2>
          <p className="lead text-muted">Everything you need to start and operate your business legally</p>
        </div>
        
        <div className="row g-4">
          {/* <!-- Trade License --> */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100">
              <div className="card-body text-center p-4">
                <div className="p-3 bg-light rounded-circle d-inline-flex mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3">Trade License</h5>
                <p className="text-muted mb-4">Get your business trade license quickly and easily with our streamlined application process.</p>
                <a href="#trade-license" className="btn btn-outline-primary" data-route="trade-license">Apply Now</a>
              </div>
            </div>
          </div>
          
          {/* <!-- GST Registration --> */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100">
              <div className="card-body text-center p-4">
                <div className="p-3 bg-light rounded-circle d-inline-flex mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"className="bi bi-receipt" viewBox="0 0 16 16">
                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3">GST Registration</h5>
                <p className="text-muted mb-4">Register for GST and get your GSTIN quickly with our expert-guided application process.</p>
                <a href="#gst-registration" class="btn btn-outline-primary" data-route="gst-registration">Apply Now</a>
              </div>
            </div>
          </div>
          
          {/* <!-- Environmental Clearance --> */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100">
              <div className="card-body text-center p-4">
                <div className="p-3 bg-light rounded-circle d-inline-flex mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"className="bi bi-tree" viewBox="0 0 16 16">
                    <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3">Environmental Clearance</h5>
                <p className="text-muted mb-4">Obtain necessary environmental permits and clearances for your business operations.</p>
                <Link to="/environmentalclearance" className="btn btn-outline-primary">Apply Now</Link>
              </div>
            </div>
          </div>
          
          {/* <!-- Other Permits --> */}
          <div class="col-lg-3 col-md-6">
            <div class="card h-100">
              <div class="card-body text-center p-4">
                <div class="p-3 bg-light rounded-circle d-inline-flex mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                  </svg>
                </div>
                <h5 class="fw-bold mb-3">Other Permits</h5>
                <p class="text-muted mb-4">Apply for industry-specific permits including FSSAI, health licenses, and more.</p>
                <a href="#other-permits" class="btn btn-outline-primary" data-route="other-permits">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Why Choose Us --> */}
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Why Choose Our Platform</h2>
          <p class="lead text-muted">We make business registration easy, fast, and hassle-free</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <div class="p-3 bg-primary rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
                  </svg>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="fw-bold">Fast Processing</h5>
                <p class="text-muted">Get your business registrations processed quickly with our streamlined systems.</p>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <div class="p-3 bg-primary rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="fw-bold">100% Compliance</h5>
                <p class="text-muted">Ensure your business is fully compliant with all regulatory requirements.</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="fw-bold">Expert Support</h5>
                <p className="text-muted">Get guidance from our compliance experts throughout the registration process.</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="fw-bold">Simplified Process</h5>
                <p className="text-muted">Easy-to-follow steps with clear instructions for all registration forms.</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="fw-bold">Time-saving</h5>
                <p className="text-muted">Save valuable time with our efficient registration processes and pre-filled forms.</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="fw-bold">Document Management</h5>
                <p className="text-muted">Secure storage for all your business registration documents and certificates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Call to Action --> */}
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h2 className="fw-bold">Ready to get started?</h2>
            <p className="lead mb-0">Begin your business registration process today and get compliant quickly.</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="#trade-license" className="btn btn-light btn-lg px-4" data-route="trade-license">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
          </>
        );
      default:
        return <p>Coming soon...</p>;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default BusinessDashboard;
