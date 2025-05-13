import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaLeaf,
  FaHospitalAlt,
  FaGraduationCap,
  FaIndustry,
  FaSearch,
} from "react-icons/fa";

const sectors = [
  {
    name: "Technology",
    icon: <FaRocket />,
    description: "Digital solutions, SaaS, and innovative tech startups",
  },
  {
    name: "Finance",
    icon: <FaChartLine />,
    description: "FinTech, investment, and financial services",
  },
  {
    name: "Consulting",
    icon: <FaHandshake />,
    description: "Business advisory and professional services",
  },
  {
    name: "E-commerce",
    icon: <FaGlobe />,
    description: "Online retail and digital marketplace solutions",
  },
  {
    name: "Green Tech",
    icon: <FaLeaf />,
    description: "Sustainable solutions and environmental innovations",
  },
  {
    name: "Healthcare",
    icon: <FaHospitalAlt />,
    description: "Medical technology and healthcare services",
  },
  {
    name: "Education",
    icon: <FaGraduationCap />,
    description: "EdTech solutions and learning platforms",
  },
  {
    name: "Manufacturing",
    icon: <FaIndustry />,
    description: "Smart manufacturing and industrial solutions",
  },
  {
    name: "New Sector",
    icon: <FaSearch />,
    description: "Search new sector",
  },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter sectors based on search query
  const filteredSectors = sectors.filter((sector) =>
    sector.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">
            Welcome to Entrepreneurs Transform Your Vision Into Reality
          </h1>
          <div className="container mt-4">
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <h2 className="fw-bold">
                  Single Window Platform for Entrepreneurs
                </h2>
              </div>
              <div className="col-12 col-md-8 col-lg-6 mt-3">
                <div className="input-group">
                  <span className="input-group-text bg-primary text-white">
                    <FaSearch className="sector-searchicon" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search sectors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search sectors"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="lead mb-4">
            Streamline your business approval process with our expert review
            system
          </p>
          <Link to="/apply" className="btn btn-outline-light btn-lg px-4">
            Get Started
          </Link>
          {/* <Link to="/status" className="btn btn-outline-light btn-lg px-4">
            Check Status
          </Link> */}
        </div>
      </section>

      {/* Featured Sectors */}
      <section id="sectors" className="py-5">
        <div className="container">
          <h2 className="text-center section-title">Featured Sectors</h2>
          <p className="section-subtitle">
            Explore diverse industries where entrepreneurs are making their mark
            and creating impact
          </p>
          <div className="row g-4">
            {filteredSectors.length > 0 ? (
              filteredSectors.map((sector, index) => (
                <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                  <div className="sector-card">
                    {sector.icon}
                    <h3>{sector.name}</h3>
                    <p>{sector.description}</p>
                    <button className="btn btn-outline-primary">
                      Explore{sector.name}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No sectors found.</p>
            )}
          </div>
        </div>
      </section>
      <div className="container">
        <h2 className="text-center section-title">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card feature-card h-100">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="bi bi-file-earmark-text display-4 text-primary"></i>
                </div>
                <h5 className="card-title">Submit Application</h5>
                <p className="card-text">
                  Quick and easy application process for your business sector
                  approval
                </p>
                <Link to="/apply" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card h-100">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="bi bi-lightning-charge display-4 text-primary"></i>
                </div>
                <h5 className="card-title">Fast Approval</h5>
                <p className="card-text">
                  Get quick expert review and approval for your business
                  proposal
                </p>
                <Link to="/status" className="btn btn-primary">
                  Check Status
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card feature-card h-100">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="bi bi-shield-check display-4 text-primary"></i>
                </div>
                <h5 className="card-title">Expert Review</h5>
                <p className="card-text">
                  Professional evaluation of your application by industry
                  experts
                </p>
                <Link
                  to="/login"
                  className="btn btn-primary"
                
                >
                  Login as Expert
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="my-5 py-5 bg-light rounded-3">
          <div className="container">
            <h2 className="text-center section-title">How It Works</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-person-plus-fill display-4 text-primary"></i>
                  </div>
                  <h5>1. Register</h5>
                  <p>Create your account to get started</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-file-text display-4 text-primary"></i>
                  </div>
                  <h5>2. Submit</h5>
                  <p>Fill out the application form</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-search display-4 text-primary"></i>
                  </div>
                  <h5>3. Review</h5>
                  <p>Expert evaluation process</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-check-circle display-4 text-primary"></i>
                  </div>
                  <h5>4. Approval</h5>
                  <p>Get your business approved</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
