export function renderLearnMorePage(container) {
  container.innerHTML = `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Learn More Hero -->
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold mb-4">Understanding Business Registration</h1>
            <p class="lead text-muted">Everything you need to know about registering your business in India</p>
          </div>

          <!-- Registration Process Overview -->
          <div class="card mb-5">
            <div class="card-body p-4 p-md-5">
              <div class="row align-items-center">
                <div class="col-lg-6 mb-4 mb-lg-0">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" alt="Registration Process" class="img-fluid rounded-3 shadow">
                </div>
                <div class="col-lg-6">
                  <h2 class="fw-bold mb-4">The Registration Process</h2>
                  <p class="text-muted">Understanding the business registration process is crucial for entrepreneurs. We've simplified it into easy-to-follow steps:</p>
                  <div class="d-flex mb-3">
                    <div class="flex-shrink-0">
                      <div class="p-2 bg-primary rounded-circle text-white">1</div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="fw-bold mb-1">Choose Business Structure</h6>
                      <p class="text-muted mb-0">Select from Proprietorship, Partnership, LLP, or Private Limited</p>
                    </div>
                  </div>
                  <div class="d-flex mb-3">
                    <div class="flex-shrink-0">
                      <div class="p-2 bg-primary rounded-circle text-white">2</div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="fw-bold mb-1">Document Preparation</h6>
                      <p class="text-muted mb-0">Gather all required documents and forms</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <div class="p-2 bg-primary rounded-circle text-white">3</div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="fw-bold mb-1">Application Submission</h6>
                      <p class="text-muted mb-0">Submit applications and track progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Types of Registrations -->
          <div class="card mb-5">
            <div class="card-body p-4 p-md-5">
              <h2 class="fw-bold text-center mb-5">Types of Business Registrations</h2>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-center mb-3">
                        <div class="p-3 bg-primary rounded-circle text-white me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                          </svg>
                        </div>
                        <h5 class="fw-bold mb-0">Trade License</h5>
                      </div>
                      <p class="text-muted mb-0">Required for operating a business establishment. Ensures compliance with local trade regulations.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-center mb-3">
                        <div class="p-3 bg-primary rounded-circle text-white me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                          </svg>
                        </div>
                        <h5 class="fw-bold mb-0">GST Registration</h5>
                      </div>
                      <p class="text-muted mb-0">Mandatory for businesses with turnover above ₹20 lakhs. Essential for tax compliance.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-center mb-3">
                        <div class="p-3 bg-primary rounded-circle text-white me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
                            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
                          </svg>
                        </div>
                        <h5 class="fw-bold mb-0">Environmental Clearance</h5>
                      </div>
                      <p class="text-muted mb-0">Required for industries with environmental impact. Ensures sustainable business practices.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body p-4">
                      <div class="d-flex align-items-center mb-3">
                        <div class="p-3 bg-primary rounded-circle text-white me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                          </svg>
                        </div>
                        <h5 class="fw-bold mb-0">Industry-Specific Permits</h5>
                      </div>
                      <p class="text-muted mb-0">Additional permits like FSSAI, Health License based on business type.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Documents Required -->
          <div class="card mb-5">
            <div class="card-body p-4 p-md-5">
              <h2 class="fw-bold text-center mb-5">Essential Documents</h2>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <div class="p-3 bg-light rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
                          <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="fw-bold mb-1">Identity Proof</h6>
                      <p class="text-muted mb-0">Aadhaar Card, PAN Card, Passport, Voter ID</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <div class="p-3 bg-light rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="fw-bold mb-1">Address Proof</h6>
                      <p class="text-muted mb-0">Utility Bills, Rent Agreement, Property Documents</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <div class="p-3 bg-light rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                          <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-10Zm.5.5v9h6v-9h-6Z"/>
                          <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1h-11ZM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="fw-bold mb-1">Business Proof</h6>
                      <p class="text-muted mb-0">Certificate of Incorporation, Partnership Deed</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <div class="p-3 bg-light rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                          <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6 class="fw-bold mb-1">Bank Documents</h6>
                      <p class="text-muted mb-0">Bank Account Statements, Cancelled Cheque</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQs -->
          <div class="card mb-5">
            <div class="card-body p-4 p-md-5">
              <h2 class="fw-bold text-center mb-5">Frequently Asked Questions</h2>
              <div class="accordion" id="faqAccordion">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How long does the registration process take?
                    </button>
                  </h3>
                  <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div class="accordion-body text-muted">
                      The registration process typically takes 3-5 business days for basic registrations and up to 15-20 days for more complex permits. The exact timeline depends on the type of registration and completeness of documentation.
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What are the costs involved?
                    </button>
                  </h3>
                  <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body text-muted">
                      Registration costs vary based on business type and location. Basic trade license starts from ₹1,000, while GST registration is free. Additional permits may have separate fee structures set by respective authorities.
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Can I apply for multiple registrations simultaneously?
                    </button>
                  </h3>
                  <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body text-muted">
                      Yes, you can apply for multiple registrations simultaneously. However, some permits may require prior registrations as prerequisites. Our system will guide you through the optimal application sequence.
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What happens after I submit my application?
                    </button>
                  </h3>
                  <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body text-muted">
                      After submission, our team reviews your application and documents. You'll receive a confirmation email with your application reference number. We'll keep you updated on the progress and contact you if any additional information is needed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="card bg-primary text-white">
            <div class="card-body p-4 p-md-5 text-center">
              <h2 class="fw-bold mb-4">Ready to Start Your Business Journey?</h2>
              <p class="lead mb-4">Let us help you navigate the registration process smoothly</p>
              <a href="#trade-license" class="btn btn-light btn-lg px-5">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}