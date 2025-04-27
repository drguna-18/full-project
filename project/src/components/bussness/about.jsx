import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    const links = document.querySelectorAll("[data-route]");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const route = link.getAttribute("data-route");
        window.location.hash = route;
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-4">
              About Business Registration Portal
            </h1>
            <p className="lead text-muted">
              Simplifying business compliance since 2020
            </p>
          </div>

          <div className="card mb-5">
            <div className="card-body p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                    alt="Our Story"
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bold mb-4">Our Story</h2>
                  <p className="text-muted">
                    Founded with a vision to simplify the complex world of
                    business registrations, we've helped thousands of
                    entrepreneurs turn their business dreams into reality. Our
                    platform streamlines the registration process, making it
                    accessible and hassle-free for business owners across the
                    country.
                  </p>
                  <p className="text-muted mb-0">
                    What started as a simple idea has grown into a comprehensive
                    platform that handles everything from trade licenses to
                    environmental clearances, all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5 bg-primary text-white">
            <div className="card-body p-4 p-md-5">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600"
                    alt="Our Mission"
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
                <div className="col-lg-6 order-lg-1">
                  <h2 className="fw-bold mb-4">Our Mission</h2>
                  <p>
                    We believe that every entrepreneur deserves a smooth path to
                    establishing their business legally. Our mission is to
                    eliminate bureaucratic hurdles and make business
                    registration accessible to all.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3 d-flex align-items-center">
                      <span className="bg-white text-primary rounded-circle p-2 me-3">
                        ✓
                      </span>
                      Simplify business registration process
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <span className="bg-white text-primary rounded-circle p-2 me-3">
                        ✓
                      </span>
                      Ensure 100% compliance with regulations
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="bg-white text-primary rounded-circle p-2 me-3">
                        ✓
                      </span>
                      Provide expert support throughout the journey
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold text-center mb-5">Our Impact</h2>
              <div className="row g-4 text-center">
                <div className="col-md-4">
                  <div className="p-4 rounded-3 bg-light h-100">
                    <div className="display-4 fw-bold text-primary mb-2">
                      10K+
                    </div>
                    <h5 className="fw-bold mb-2">Businesses Registered</h5>
                    <p className="text-muted mb-0">
                      Successfully registered across various sectors
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-4 rounded-3 bg-light h-100">
                    <div className="display-4 fw-bold text-primary mb-2">
                      95%
                    </div>
                    <h5 className="fw-bold mb-2">Success Rate</h5>
                    <p className="text-muted mb-0">
                      Applications approved on first submission
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-4 rounded-3 bg-light h-100">
                    <div className="display-4 fw-bold text-primary mb-2">
                      48hrs
                    </div>
                    <h5 className="fw-bold mb-2">Average Processing</h5>
                    <p className="text-muted mb-0">
                      Quick turnaround time for applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold text-center mb-5">Our Leadership Team</h2>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
                      alt="CEO"
                      className="rounded-circle mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="fw-bold mb-1">John Smith</h5>
                    <p className="text-muted small mb-2">
                      Chief Executive Officer
                    </p>
                    <p className="text-muted small mb-0">
                      20+ years experience in business consulting
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                      alt="COO"
                      className="rounded-circle mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="fw-bold mb-1">Sarah Johnson</h5>
                    <p className="text-muted small mb-2">
                      Chief Operations Officer
                    </p>
                    <p className="text-muted small mb-0">
                      15+ years in operations management
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
                      alt="CTO"
                      className="rounded-circle mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="fw-bold mb-1">Michael Chen</h5>
                    <p className="text-muted small mb-2">
                      Chief Technology Officer
                    </p>
                    <p className="text-muted small mb-0">
                      12+ years in technology solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-primary text-white">
            <div className="card-body p-4 p-md-5 text-center">
              <h2 className="fw-bold mb-4">
                Ready to Start Your Business Journey?
              </h2>
              <p className="lead mb-4">
                Join thousands of successful entrepreneurs who trusted us with
                their business registration
              </p>
              <Link to="/login" className="btn btn-light btn-lg px-5">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
