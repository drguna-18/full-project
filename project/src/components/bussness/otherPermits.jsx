import { validateFormFields, displayValidationErrors } from '../utils/formValidation.js';
import { saveFormData, loadFormData, setupFormAutoSave } from '../utils/formStorage.js';

export function renderOtherPermitsPage(container) {
  container.innerHTML = `
    <div class="container py-5">
      <div class="page-header text-center mb-5">
        <h1 class="fw-bold">Other Business Permits & Licenses</h1>
        <p class="lead text-muted">Apply for industry-specific permits and licenses for your business</p>
      </div>
      
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Permit Selection -->
          <div class="card mb-5">
            <div class="card-header bg-primary text-white py-3">
              <h4 class="mb-0">Select Permit Type</h4>
            </div>
            <div class="card-body p-4">
              <p class="text-muted mb-4">Please select the type of permit or license you want to apply for:</p>
              
              <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100 permit-card" data-permit="fssai">
                    <div class="card-body text-center p-4">
                      <div class="p-3 bg-light rounded-circle d-inline-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"/>
                          <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
                        </svg>
                      </div>
                      <h5 class="fw-bold mb-3">FSSAI License</h5>
                      <p class="text-muted mb-4">Food Safety and Standards Authority of India license for food businesses</p>
                      <button class="btn btn-outline-primary select-permit" data-permit="fssai">Apply Now</button>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100 permit-card" data-permit="health">
                    <div class="card-body text-center p-4">
                      <div class="p-3 bg-light rounded-circle d-inline-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-pulse" viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z"/>
                          <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"/>
                        </svg>
                      </div>
                      <h5 class="fw-bold mb-3">Health License</h5>
                      <p class="text-muted mb-4">Health/Medical license for clinics, hospitals and healthcare facilities</p>
                      <button class="btn btn-outline-primary select-permit" data-permit="health">Apply Now</button>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100 permit-card" data-permit="fire">
                    <div class="card-body text-center p-4">
                      <div class="p-3 bg-light rounded-circle d-inline-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                        </svg>
                      </div>
                      <h5 class="fw-bold mb-3">Fire NOC</h5>
                      <p class="text-muted mb-4">Fire safety No Objection Certificate for commercial establishments</p>
                      <button class="btn btn-outline-primary select-permit" data-permit="fire">Apply Now</button>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100 permit-card" data-permit="pollution">
                    <div class="card-body text-center p-4">
                      <div class="p-3 bg-light rounded-circle d-inline-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
                          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                        </svg>
                      </div>
                      <h5 class="fw-bold mb-3">Pollution Consent</h5>
                      <p class="text-muted mb-4">Pollution Control Board consent for manufacturing and processing units</p>
                      <button class="btn btn-outline-primary select-permit" data-permit="pollution">Apply Now</button>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100 permit-card" data-permit="liquor">
                    <div class="card-body text-center p-4">
                      <div class="p-3 bg-light rounded-circle d-inline-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16">
                          <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372l-.39-1.927L2.4.985a.5.5 0 1 1 .372-.928l2.94 1.175.311 1.5c.076-.002.152-.002.228 0l.31-1.5 2.942-1.175a.5.5 0 0 1 .58.928l-2.26.904-.399 1.927c.384.096.731.22.992.375.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87s-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372l-.39-1.927L2.4.985a.5.5 0 0 1 .372-.928l2.94 1.175.311 1.5c.076-.002.152-.002.228 0l.31-1.5 2.942-1.175a.5.5 0 0 1 .58.928l-2.26.904-.399 1.927c.384.096.731.219.992.375.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372l-.39-1.927L2.4.985a.5.5 0 0 1 .372-.928l2.94 1.175.311 1.5c.076-.002.152-.002.228 0l.31-1.5L9.1.057a.5.5 0 0 1 .58.928l-2.26.904-.399 1.927c.384.096.731.22.992.375.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372l-.39-1.927L2.4.985a.5.5 0 0 1 .372-.928l2.94 1.175.311 1.5c.076-.002.152-.002.228 0l.31-1.5 2.942-1.175a.5.5 0 0 1 .58.928l-2.26.904z"/>
                        </svg>
                      </div>
                      <h5 class="fw-bold mb-3">Liquor License</h5>
                      <p class="text-muted mb-4">License to serve or sell alcoholic beverages in restaurants and shops</p>
                      <button class="btn btn-outline-primary select-permit" data-permit="liquor">Apply Now</button>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100 permit-card" data-permit="shop">
                    <div class="card-body text-center p-4">
                      <div class="p-3 bg-light rounded-circle d-inline-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                      </div>
                      <h5 class="fw-bold mb-3">Shop & Establishment</h5>
                      <p class="text-muted mb-4">License for shops, commercial establishments and offices</p>
                      <button class="btn btn-outline-primary select-permit" data-permit="shop">Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- FSSAI License Form -->
          <div id="fssai-form-container" class="permit-form-container d-none">
            <form id="fssaiForm" class="needs-validation" novalidate>
              <div class="form-card mb-4">
                <div class="card-header py-3">
                  <h4 class="mb-0">FSSAI License Application</h4>
                </div>
                <div class="card-body p-4">
                  <div class="alert alert-info mb-4">
                    <div class="d-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                      </svg>
                      <div>
                        <p class="mb-0">FSSAI License is required for all food business operators including manufacturers, traders, restaurants, etc. Please select the appropriate license type based on your annual turnover.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="fssaiBusinessName" class="form-label required-field">Business Name</label>
                      <input type="text" class="form-control" id="fssaiBusinessName" name="fssaiBusinessName" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiLicenseType" class="form-label required-field">License Type</label>
                      <select class="form-select" id="fssaiLicenseType" name="fssaiLicenseType" required>
                        <option value="" selected disabled>Select license type</option>
                        <option value="basic">Basic Registration (Annual turnover up to ₹12 lakhs)</option>
                        <option value="state">State License (Annual turnover between ₹12 - 20 crores)</option>
                        <option value="central">Central License (Annual turnover above ₹20 crores)</option>
                      </select>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiBusinessType" class="form-label required-field">Business Type</label>
                      <select class="form-select" id="fssaiBusinessType" name="fssaiBusinessType" required>
                        <option value="" selected disabled>Select business type</option>
                        <option value="manufacturer">Manufacturer/Processor</option>
                        <option value="restaurant">Restaurant/Eating House</option>
                        <option value="retailer">Retailer/Seller</option>
                        <option value="distributor">Distributor/Supplier</option>
                        <option value="transporter">Transporter</option>
                        <option value="ecommerce">E-Commerce Food Business</option>
                        <option value="storage">Storage/Warehouse</option>
                        <option value="other">Other</option>
                      </select>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiTurnover" class="form-label required-field">Annual Turnover (in ₹)</label>
                      <input type="number" class="form-control" id="fssaiTurnover" name="fssaiTurnover" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-12">
                      <label for="fssaiAddress" class="form-label required-field">Business Address</label>
                      <textarea class="form-control" id="fssaiAddress" name="fssaiAddress" rows="2" required></textarea>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiCity" class="form-label required-field">City</label>
                      <input type="text" class="form-control" id="fssaiCity" name="fssaiCity" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-3">
                      <label for="fssaiState" class="form-label required-field">State</label>
                      <select class="form-select" id="fssaiState" name="fssaiState" required>
                        <option value="" selected disabled>Select state</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <!-- Add more states as needed -->
                      </select>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-3">
                      <label for="fssaiPincode" class="form-label required-field">PIN Code</label>
                      <input type="text" class="form-control" id="fssaiPincode" name="fssaiPincode" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiName" class="form-label required-field">Applicant Name</label>
                      <input type="text" class="form-control" id="fssaiName" name="fssaiName" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiDesignation" class="form-label required-field">Designation</label>
                      <input type="text" class="form-control" id="fssaiDesignation" name="fssaiDesignation" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiEmail" class="form-label required-field">Email Address</label>
                      <input type="email" class="form-control" id="fssaiEmail" name="fssaiEmail" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiPhone" class="form-label required-field">Mobile Number</label>
                      <input type="tel" class="form-control" id="fssaiPhone" name="fssaiPhone" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-12 mt-3">
                      <h5>Required Documents</h5>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiIdProof" class="form-label required-field">ID Proof</label>
                      <input type="file" class="form-control" id="fssaiIdProof" name="fssaiIdProof" required>
                      <div class="form-text">Aadhaar/Voter ID/Passport/Driving License</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiBusinessProof" class="form-label required-field">Business Registration Proof</label>
                      <input type="file" class="form-control" id="fssaiBusinessProof" name="fssaiBusinessProof" required>
                      <div class="form-text">GST Certificate/Shop Act/CIN/Registration Certificate</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiAddressProof" class="form-label required-field">Business Premise Address Proof</label>
                      <input type="file" class="form-control" id="fssaiAddressProof" name="fssaiAddressProof" required>
                      <div class="form-text">Rent Agreement/Electricity Bill/Property Tax Receipt</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="fssaiPhoto" class="form-label required-field">Passport Size Photo</label>
                      <input type="file" class="form-control" id="fssaiPhoto" name="fssaiPhoto" required>
                      <div class="form-text">Recent passport size photograph of the applicant</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-12">
                      <label for="fssaiFormAnnotated" class="form-label required-field">FSSAI Form Annexure-1</label>
                      <input type="file" class="form-control" id="fssaiFormAnnotated" name="fssaiFormAnnotated" required>
                      <div class="form-text">Completed and signed FSSAI application form annexure</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-12 mt-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="fssaiTerms" name="fssaiTerms" required>
                        <label class="form-check-label" for="fssaiTerms">
                          I hereby declare that all the information provided above is true and correct to the best of my knowledge. I understand that providing false information may result in rejection of my application and/or legal consequences.
                        </label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer p-4">
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-secondary back-to-permit-selection">Back to Permit Selection</button>
                    <button type="submit" class="btn btn-primary">Submit Application</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          <!-- Health License Form -->
          <div id="health-form-container" class="permit-form-container d-none">
            <form id="healthForm" class="needs-validation" novalidate>
              <div class="form-card mb-4">
                <div class="card-header py-3">
                  <h4 class="mb-0">Health License Application</h4>
                </div>
                <div class="card-body p-4">
                  <div class="alert alert-info mb-4">
                    <div class="d-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                      </svg>
                      <div>
                        <p class="mb-0">Health License is required for hospitals, clinics, diagnostic centers, and other healthcare facilities to operate legally. Please provide accurate information about your facility.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="healthEstablishmentName" class="form-label required-field">Establishment Name</label>
                      <input type="text" class="form-control" id="healthEstablishmentName" name="healthEstablishmentName" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthEstablishmentType" class="form-label required-field">Establishment Type</label>
                      <select class="form-select" id="healthEstablishmentType" name="healthEstablishmentType" required>
                        <option value="" selected disabled>Select establishment type</option>
                        <option value="hospital">Hospital</option>
                        <option value="clinic">Clinic</option>
                        <option value="polyclinic">Polyclinic</option>
                        <option value="dental">Dental Clinic</option>
                        <option value="diagnostics">Diagnostic Center</option>
                        <option value="laboratory">Medical Laboratory</option>
                        <option value="nursing">Nursing Home</option>
                        <option value="ayurveda">Ayurvedic Center</option>
                        <option value="homeopathy">Homeopathic Center</option>
                        <option value="other">Other Healthcare Facility</option>
                      </select>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthRegistrationNumber" class="form-label required-field">Registration/CIN Number</label>
                      <input type="text" class="form-control" id="healthRegistrationNumber" name="healthRegistrationNumber" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthBedCount" class="form-label">Number of Beds (if applicable)</label>
                      <input type="number" class="form-control" id="healthBedCount" name="healthBedCount">
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-12">
                      <label for="healthAddress" class="form-label required-field">Establishment Address</label>
                      <textarea class="form-control" id="healthAddress" name="healthAddress" rows="2" required></textarea>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthCity" class="form-label required-field">City</label>
                      <input type="text" class="form-control" id="healthCity" name="healthCity" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-3">
                      <label for="healthState" class="form-label required-field">State</label>
                      <select class="form-select" id="healthState" name="healthState" required>
                        <option value="" selected disabled>Select state</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <!-- Add more states as needed -->
                      </select>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-3">
                      <label for="healthPincode" class="form-label required-field">PIN Code</label>
                      <input type="text" class="form-control" id="healthPincode" name="healthPincode" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthOwnerName" class="form-label required-field">Owner/Director Name</label>
                      <input type="text" class="form-control" id="healthOwnerName" name="healthOwnerName" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthQualification" class="form-label required-field">Medical Qualification</label>
                      <input type="text" class="form-control" id="healthQualification" name="healthQualification" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthEmail" class="form-label required-field">Email Address</label>
                      <input type="email" class="form-control" id="healthEmail" name="healthEmail" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthPhone" class="form-label required-field">Mobile Number</label>
                      <input type="tel" class="form-control" id="healthPhone" name="healthPhone" required>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-12 mt-3">
                      <h5>Required Documents</h5>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthIdProof" class="form-label required-field">ID Proof</label>
                      <input type="file" class="form-control" id="healthIdProof" name="healthIdProof" required>
                      <div class="form-text">Aadhaar/Voter ID/Passport/Driving License</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthQualificationProof" class="form-label required-field">Medical Qualification Certificate</label>
                      <input type="file" class="form-control" id="healthQualificationProof" name="healthQualificationProof" required>
                      <div class="form-text">Medical Degree/Registration Certificate</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthEstablishmentProof" class="form-label required-field">Establishment Proof</label>
                      <input type="file" class="form-control" id="healthEstablishmentProof" name="healthEstablishmentProof" required>
                      <div class="form-text">Registration Certificate/CIN/Partnership Deed</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthPremisesProof" class="form-label required-field">Premises Proof</label>
                      <input type="file" class="form-control" id="healthPremisesProof" name="healthPremisesProof" required>
                      <div class="form-text">Rent Agreement/Ownership Deed/Property Tax Receipt</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthLayoutPlan" class="form-label required-field">Facility Layout Plan</label>
                      <input type="file" class="form-control" id="healthLayoutPlan" name="healthLayoutPlan" required>
                      <div class="form-text">Detailed layout plan of the healthcare facility</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-md-6">
                      <label for="healthEquipmentList" class="form-label required-field">Equipment List</label>
                      <input type="file" class="form-control" id="healthEquipmentList" name="healthEquipmentList" required>
                      <div class="form-text">List of medical equipment installed in the facility</div>
                      <div class="invalid-feedback"></div>
                    </div>
                    
                    <div class="col-12 mt-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="healthTerms" name="healthTerms" required>
                        <label class="form-check-label" for="healthTerms">
                          I hereby declare that all the information provided above is true and correct to the best of my knowledge. I understand that providing false information may result in rejection of my application and/or legal consequences.
                        </label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer p-4">
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-secondary back-to-permit-selection">Back to Permit Selection</button>
                    <button type="submit" class="btn btn-primary">Submit Application</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          <!-- More permit form containers for other permits -->
        </div>
      </div>
    </div>
  `;
  
  // Initialize permit selection functionality
  const permitCards = document.querySelectorAll('.permit-card');
  const permitFormContainers = document.querySelectorAll('.permit-form-container');
  const selectPermitButtons = document.querySelectorAll('.select-permit');
  const backToSelectionButtons = document.querySelectorAll('.back-to-permit-selection');
  
  // Function to show specific permit form
  function showPermitForm(permitType) {
    permitFormContainers.forEach(container => {
      container.classList.add('d-none');
    });
    
    const selectedForm = document.getElementById(`${permitType}-form-container`);
    if (selectedForm) {
      document.querySelector('.card').classList.add('d-none');
      selectedForm.classList.remove('d-none');
    }
  }
  
  // Handle permit selection
  selectPermitButtons.forEach(button => {
    button.addEventListener('click', function() {
      const permitType = this.getAttribute('data-permit');
      showPermitForm(permitType);
    });
  });
  
  // Handle back to selection
  backToSelectionButtons.forEach(button => {
    button.addEventListener('click', function() {
      document.querySelector('.card').classList.remove('d-none');
      permitFormContainers.forEach(container => {
        container.classList.add('d-none');
      });
    });
  });
  
  // Form validation for FSSAI form
  const fssaiForm = document.getElementById('fssaiForm');
  if (fssaiForm) {
    fssaiForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Basic validation
      if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
      }
      
      // Show success message
      fssaiForm.innerHTML = `
        <div class="alert alert-success p-5 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-check-circle-fill text-success mb-4" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <h3 class="mb-3">Application Submitted Successfully!</h3>
          <p class="lead mb-4">Your FSSAI License application has been received. Your application reference number is:</p>
          <p class="display-6 fw-bold mb-4">FSSAI-${Math.floor(Math.random() * 9000) + 1000}-${new Date().getFullYear()}</p>
          <p class="mb-4">We will review your application and get back to you within 3-5 business days. You will receive an email with further instructions.</p>
          <div class="d-grid gap-2 col-md-6 mx-auto mt-4">
            <a href="#home" class="btn btn-primary btn-lg">Return to Home</a>
            <button type="button" class="btn btn-outline-primary" id="fssaiPrintReceipt">Print Receipt</button>
          </div>
        </div>
      `;
      
      // Add print functionality
      document.getElementById('fssaiPrintReceipt')?.addEventListener('click', function() {
        window.print();
      });
    });
  }
  
  // Form validation for Health License form
  const healthForm = document.getElementById('healthForm');
  if (healthForm) {
    healthForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Basic validation
      if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
      }
      
      // Show success message
      healthForm.innerHTML = `
        <div class="alert alert-success p-5 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-check-circle-fill text-success mb-4" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <h3 class="mb-3">Application Submitted Successfully!</h3>
          <p class="lead mb-4">Your Health License application has been received. Your application reference number is:</p>
          <p class="display-6 fw-bold mb-4">HL-${Math.floor(Math.random() * 9000) + 1000}-${new Date().getFullYear()}</p>
          <p class="mb-4">We will review your application and get back to you within 7-10 business days. You will receive an email with further instructions.</p>
          <div class="d-grid gap-2 col-md-6 mx-auto mt-4">
            <a href="#home" class="btn btn-primary btn-lg">Return to Home</a>
            <button type="button" class="btn btn-outline-primary" id="healthPrintReceipt">Print Receipt</button>
          </div>
        </div>
      `;
      
      // Add print functionality
      document.getElementById('healthPrintReceipt')?.addEventListener('click', function() {
        window.print();
      });
    });
  }
}