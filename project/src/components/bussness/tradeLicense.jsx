import { validateFormFields, displayValidationErrors } from '../utils/formValidation.js';
import { saveFormData, loadFormData, setupFormAutoSave } from '../utils/formStorage.js';

export function renderTradeLicensePage(container) {
  container.innerHTML = `
    <div class="container py-5">
      <div class="page-header text-center mb-5">
        <h1 class="fw-bold">Trade License Application</h1>
        <p class="lead text-muted">Complete the form below to apply for your business trade license</p>
      </div>
      
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Form Progress Indicators -->
          <div class="step-indicator mb-4">
            <div class="step active" data-step="1">
              <div class="step-number">1</div>
              <div class="step-label">Business Details</div>
              <div class="step-connector"></div>
            </div>
            <div class="step" data-step="2">
              <div class="step-number">2</div>
              <div class="step-label">Owner Information</div>
              <div class="step-connector"></div>
            </div>
            <div class="step" data-step="3">
              <div class="step-number">3</div>
              <div class="step-label">Location & Activity</div>
              <div class="step-connector"></div>
            </div>
            <div class="step" data-step="4">
              <div class="step-number">4</div>
              <div class="step-label">Documents</div>
              <div class="step-connector"></div>
            </div>
            <div class="step" data-step="5">
              <div class="step-number">5</div>
              <div class="step-label">Review & Submit</div>
            </div>
          </div>
          
          <!-- Form Container -->
          <form id="tradeLicenseForm" class="needs-validation" novalidate>
            <!-- Step 1: Business Details -->
            <div class="form-card form-step active" data-step="1">
              <div class="card-header py-3">
                <h4 class="mb-0">Business Details</h4>
              </div>
              <div class="card-body p-4">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="businessName" class="form-label required-field">Business Name</label>
                    <input type="text" class="form-control" id="businessName" name="businessName" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="businessType" class="form-label required-field">Business Type</label>
                    <select class="form-select" id="businessType" name="businessType" required>
                      <option value="" selected disabled>Select business type</option>
                      <option value="proprietorship">Sole Proprietorship</option>
                      <option value="partnership">Partnership</option>
                      <option value="llp">Limited Liability Partnership (LLP)</option>
                      <option value="pvtLtd">Private Limited Company</option>
                      <option value="publicLtd">Public Limited Company</option>
                      <option value="other">Other</option>
                    </select>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="businessCategory" class="form-label required-field">Business Category</label>
                    <select class="form-select" id="businessCategory" name="businessCategory" required>
                      <option value="" selected disabled>Select business category</option>
                      <option value="retail">Retail</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="services">Services</option>
                      <option value="restaurant">Restaurant/Food Service</option>
                      <option value="other">Other</option>
                    </select>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="startDate" class="form-label required-field">Business Start Date</label>
                    <input type="date" class="form-control" id="startDate" name="startDate" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-12">
                    <label for="businessDescription" class="form-label required-field">Business Description</label>
                    <textarea class="form-control" id="businessDescription" name="businessDescription" rows="3" placeholder="Briefly describe your business activities" required></textarea>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="pan" class="form-label required-field">PAN Number</label>
                    <input type="text" class="form-control" id="pan" name="pan" placeholder="ABCDE1234F" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="gst" class="form-label">GST Number (if registered)</label>
                    <input type="text" class="form-control" id="gst" name="gst" placeholder="22AAAAA0000A1Z5">
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
              </div>
              <div class="card-footer p-4">
                <div class="form-navigation d-flex justify-content-end">
                  <button type="button" class="btn btn-primary px-4 next-step">Next Step</button>
                </div>
              </div>
            </div>
            
            <!-- Step 2: Owner Information -->
            <div class="form-card form-step" data-step="2">
              <div class="card-header py-3">
                <h4 class="mb-0">Owner Information</h4>
              </div>
              <div class="card-body p-4">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="ownerName" class="form-label required-field">Owner/Director Name</label>
                    <input type="text" class="form-control" id="ownerName" name="ownerName" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="designation" class="form-label required-field">Designation</label>
                    <input type="text" class="form-control" id="designation" name="designation" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="email" class="form-label required-field">Email Address</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="phone" class="form-label required-field">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="10-digit number" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-12">
                    <label for="address" class="form-label required-field">Residential Address</label>
                    <input type="text" class="form-control" id="address" name="address" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="city" class="form-label required-field">City</label>
                    <input type="text" class="form-control" id="city" name="city" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-3">
                    <label for="state" class="form-label required-field">State</label>
                    <select class="form-select" id="state" name="state" required>
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
                    <label for="pincode" class="form-label required-field">PIN Code</label>
                    <input type="text" class="form-control" id="pincode" name="pincode" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="idType" class="form-label required-field">ID Proof Type</label>
                    <select class="form-select" id="idType" name="idType" required>
                      <option value="" selected disabled>Select ID proof</option>
                      <option value="aadhaar">Aadhaar Card</option>
                      <option value="passport">Passport</option>
                      <option value="voterID">Voter ID</option>
                      <option value="drivingLicense">Driving License</option>
                    </select>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="idNumber" class="form-label required-field">ID Number</label>
                    <input type="text" class="form-control" id="idNumber" name="idNumber" required>
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
              </div>
              <div class="card-footer p-4">
                <div class="form-navigation d-flex justify-content-between">
                  <button type="button" class="btn btn-outline-secondary px-4 prev-step">Previous</button>
                  <button type="button" class="btn btn-primary px-4 next-step">Next Step</button>
                </div>
              </div>
            </div>
            
            <!-- Step 3: Location & Activity -->
            <div class="form-card form-step" data-step="3">
              <div class="card-header py-3">
                <h4 class="mb-0">Business Location & Activity</h4>
              </div>
              <div class="card-body p-4">
                <div class="row g-3">
                  <div class="col-12">
                    <label for="businessAddress" class="form-label required-field">Business Address</label>
                    <input type="text" class="form-control" id="businessAddress" name="businessAddress" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="businessCity" class="form-label required-field">City</label>
                    <input type="text" class="form-control" id="businessCity" name="businessCity" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-3">
                    <label for="businessState" class="form-label required-field">State</label>
                    <select class="form-select" id="businessState" name="businessState" required>
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
                    <label for="businessPincode" class="form-label required-field">PIN Code</label>
                    <input type="text" class="form-control" id="businessPincode" name="businessPincode" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="premisesType" class="form-label required-field">Premises Type</label>
                    <select class="form-select" id="premisesType" name="premisesType" required>
                      <option value="" selected disabled>Select premises type</option>
                      <option value="owned">Owned</option>
                      <option value="rented">Rented/Leased</option>
                      <option value="workFromHome">Work From Home</option>
                      <option value="shared">Shared Workspace</option>
                    </select>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="premisesArea" class="form-label required-field">Premises Area (sq.ft)</label>
                    <input type="number" class="form-control" id="premisesArea" name="premisesArea" required>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="localAuthority" class="form-label required-field">Local Authority</label>
                    <select class="form-select" id="localAuthority" name="localAuthority" required>
                      <option value="" selected disabled>Select local authority</option>
                      <option value="corporation">Municipal Corporation</option>
                      <option value="municipality">Municipality</option>
                      <option value="panchayat">Panchayat</option>
                      <option value="development">Development Authority</option>
                    </select>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="zoneType" class="form-label required-field">Zone Type</label>
                    <select class="form-select" id="zoneType" name="zoneType" required>
                      <option value="" selected disabled>Select zone type</option>
                      <option value="commercial">Commercial</option>
                      <option value="residential">Residential</option>
                      <option value="industrial">Industrial</option>
                      <option value="mixed">Mixed Use</option>
                      <option value="special">Special Economic Zone</option>
                    </select>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-12">
                    <label class="form-label required-field">Nature of Business Activity</label>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="retail" id="activityRetail" name="businessActivities">
                          <label class="form-check-label" for="activityRetail">
                            Retail Trading
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="wholesale" id="activityWholesale" name="businessActivities">
                          <label class="form-check-label" for="activityWholesale">
                            Wholesale Trading
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="manufacturing" id="activityManufacturing" name="businessActivities">
                          <label class="form-check-label" for="activityManufacturing">
                            Manufacturing
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="services" id="activityServices" name="businessActivities">
                          <label class="form-check-label" for="activityServices">
                            Services
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="food" id="activityFood" name="businessActivities">
                          <label class="form-check-label" for="activityFood">
                            Food & Beverages
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="other" id="activityOther" name="businessActivities">
                          <label class="form-check-label" for="activityOther">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
              </div>
              <div class="card-footer p-4">
                <div class="form-navigation d-flex justify-content-between">
                  <button type="button" class="btn btn-outline-secondary px-4 prev-step">Previous</button>
                  <button type="button" class="btn btn-primary px-4 next-step">Next Step</button>
                </div>
              </div>
            </div>
            
            <!-- Step 4: Documents -->
            <div class="form-card form-step" data-step="4">
              <div class="card-header py-3">
                <h4 class="mb-0">Required Documents</h4>
              </div>
              <div class="card-body p-4">
                <div class="alert alert-info mb-4">
                  <div class="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                    <div>
                      Please upload clear, legible scanned copies or photos of the following documents in PDF, JPG, or PNG format. Each file should not exceed 2MB.
                    </div>
                  </div>
                </div>
                
                <div class="row g-4">
                  <div class="col-md-6">
                    <label for="idProofDoc" class="form-label required-field">ID Proof Document</label>
                    <input type="file" class="form-control" id="idProofDoc" name="idProofDoc" accept=".pdf,.jpg,.jpeg,.png" required>
                    <div class="form-text">Upload Aadhaar, Passport, Voter ID, or Driving License</div>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="addressProofDoc" class="form-label required-field">Address Proof Document</label>
                    <input type="file" class="form-control" id="addressProofDoc" name="addressProofDoc" accept=".pdf,.jpg,.jpeg,.png" required>
                    <div class="form-text">Utility bill, property tax receipt, or rental agreement</div>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="businessProofDoc" class="form-label required-field">Business Proof Document</label>
                    <input type="file" class="form-control" id="businessProofDoc" name="businessProofDoc" accept=".pdf,.jpg,.jpeg,.png" required>
                    <div class="form-text">Certificate of Incorporation, Partnership deed, or Shop Act</div>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="panCardDoc" class="form-label required-field">PAN Card</label>
                    <input type="file" class="form-control" id="panCardDoc" name="panCardDoc" accept=".pdf,.jpg,.jpeg,.png" required>
                    <div class="form-text">PAN card of the business entity or proprietor</div>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="premisesDoc" class="form-label required-field">Premises Document</label>
                    <input type="file" class="form-control" id="premisesDoc" name="premisesDoc" accept=".pdf,.jpg,.jpeg,.png" required>
                    <div class="form-text">Rent agreement, ownership proof, or NOC from landlord</div>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-md-6">
                    <label for="photoDoc" class="form-label required-field">Passport Size Photo</label>
                    <input type="file" class="form-control" id="photoDoc" name="photoDoc" accept=".jpg,.jpeg,.png" required>
                    <div class="form-text">Recent passport size photograph of the proprietor/partner/director</div>
                    <div class="invalid-feedback"></div>
                  </div>
                  
                  <div class="col-12">
                    <label for="additionalDoc" class="form-label">Any Additional Documents</label>
                    <input type="file" class="form-control" id="additionalDoc" name="additionalDoc" accept=".pdf,.jpg,.jpeg,.png" multiple>
                    <div class="form-text">Any other relevant documents (optional)</div>
                  </div>
                </div>
              </div>
              <div class="card-footer p-4">
                <div class="form-navigation d-flex justify-content-between">
                  <button type="button" class="btn btn-outline-secondary px-4 prev-step">Previous</button>
                  <button type="button" class="btn btn-primary px-4 next-step">Next Step</button>
                </div>
              </div>
            </div>
            
            <!-- Step 5: Review & Submit -->
            <div class="form-card form-step" data-step="5">
              <div class="card-header py-3">
                <h4 class="mb-0">Review & Submit</h4>
              </div>
              <div class="card-body p-4">
                <div class="alert alert-warning mb-4">
                  <div class="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div>
                      Please review all information carefully before submitting your application. By submitting, you certify that all information provided is accurate and complete.
                    </div>
                  </div>
                </div>
                
                <div id="reviewContent" class="mb-4">
                  <!-- This will be populated with form data on review -->
                  <p class="text-center text-muted">Please complete all previous steps to review your application.</p>
                </div>
                
                <div class="form-check mb-4">
                  <input class="form-check-input" type="checkbox" id="termsCheck" name="termsCheck" required>
                  <label class="form-check-label" for="termsCheck">
                    I hereby declare that all the information provided is true and correct to the best of my knowledge. I understand that any false statement may result in rejection of my application.
                  </label>
                  <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
              </div>
              <div class="card-footer p-4">
                <div class="form-navigation d-flex justify-content-between">
                  <button type="button" class="btn btn-outline-secondary px-4 prev-step">Previous</button>
                  <button type="submit" class="btn btn-success px-4">Submit Application</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  // Initialize the form navigation and validation
  const tradeLicenseForm = document.getElementById('tradeLicenseForm');
  const steps = tradeLicenseForm.querySelectorAll('.form-step');
  const stepIndicators = document.querySelectorAll('.step-indicator .step');
  const nextButtons = tradeLicenseForm.querySelectorAll('.next-step');
  const prevButtons = tradeLicenseForm.querySelectorAll('.prev-step');
  
  // Form validation rules
  const validationRules = {
    businessName: {
      required: true,
      requiredMessage: 'Business name is required'
    },
    businessType: {
      required: true,
      requiredMessage: 'Please select a business type'
    },
    businessCategory: {
      required: true,
      requiredMessage: 'Please select a business category'
    },
    startDate: {
      required: true,
      requiredMessage: 'Start date is required'
    },
    businessDescription: {
      required: true,
      requiredMessage: 'Business description is required'
    },
    pan: {
      required: true,
      requiredMessage: 'PAN number is required',
      pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      patternMessage: 'Please enter a valid 10-character PAN number (e.g., ABCDE1234F)'
    },
    gst: {
      required: false,
      pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      patternMessage: 'Please enter a valid GST number (e.g., 22AAAAA0000A1Z5)'
    },
    ownerName: {
      required: true,
      requiredMessage: 'Owner name is required'
    },
    designation: {
      required: true,
      requiredMessage: 'Designation is required'
    },
    email: {
      required: true,
      requiredMessage: 'Email address is required',
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      patternMessage: 'Please enter a valid email address'
    },
    phone: {
      required: true, 
      requiredMessage: 'Phone number is required',
      pattern: /^\d{10}$/,
      patternMessage: 'Please enter a valid 10-digit phone number'
    },
    address: {
      required: true,
      requiredMessage: 'Address is required'
    },
    city: {
      required: true,
      requiredMessage: 'City is required'
    },
    state: {
      required: true,
      requiredMessage: 'Please select a state'
    },
    pincode: {
      required: true,
      requiredMessage: 'PIN code is required',
      pattern: /^\d{6}$/,
      patternMessage: 'Please enter a valid 6-digit PIN code'
    },
    idType: {
      required: true,
      requiredMessage: 'Please select an ID proof type'
    },
    idNumber: {
      required: true,
      requiredMessage: 'ID number is required'
    },
    businessAddress: {
      required: true,
      requiredMessage: 'Business address is required'
    },
    businessCity: {
      required: true,
      requiredMessage: 'City is required'
    },
    businessState: {
      required: true,
      requiredMessage: 'Please select a state'
    },
    businessPincode: {
      required: true,
      requiredMessage: 'PIN code is required',
      pattern: /^\d{6}$/,
      patternMessage: 'Please enter a valid 6-digit PIN code'
    },
    premisesType: {
      required: true,
      requiredMessage: 'Please select premises type'
    },
    premisesArea: {
      required: true,
      requiredMessage: 'Premises area is required'
    },
    localAuthority: {
      required: true,
      requiredMessage: 'Please select local authority'
    },
    zoneType: {
      required: true,
      requiredMessage: 'Please select zone type'
    }
  };
  
  // Show a specific step
  function showStep(stepNumber) {
    steps.forEach(step => {
      step.classList.remove('active');
    });
    
    stepIndicators.forEach(indicator => {
      indicator.classList.remove('active');
      indicator.classList.remove('completed');
      
      const indicatorStep = parseInt(indicator.getAttribute('data-step'));
      if (indicatorStep < stepNumber) {
        indicator.classList.add('completed');
      } else if (indicatorStep === stepNumber) {
        indicator.classList.add('active');
      }
    });
    
    const currentStep = tradeLicenseForm.querySelector(`.form-step[data-step="${stepNumber}"]`);
    currentStep.classList.add('active');
    
    // Scroll to top of the form
    currentStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Validate current step
  function validateStep(stepNumber) {
    const currentStep = tradeLicenseForm.querySelector(`.form-step[data-step="${stepNumber}"]`);
    const inputs = currentStep.querySelectorAll('input, select, textarea');
    
    const formData = {};
    const stepValidations = {};
    
    inputs.forEach(input => {
      if (input.name) {
        if (input.type === 'checkbox') {
          formData[input.name] = input.checked;
        } else if (input.type === 'radio') {
          if (input.checked) {
            formData[input.name] = input.value;
          }
        } else {
          formData[input.name] = input.value;
        }
        
        if (validationRules[input.name]) {
          stepValidations[input.name] = validationRules[input.name];
        }
      }
    });
    
    // Special handling for file inputs in step 4
    if (stepNumber === 4) {
      const requiredFileInputs = currentStep.querySelectorAll('input[type="file"][required]');
      let allFilesValid = true;
      
      requiredFileInputs.forEach(input => {
        if (!input.files || input.files.length === 0) {
          input.classList.add('is-invalid');
          const feedbackElement = input.nextElementSibling.nextElementSibling;
          if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
            feedbackElement.textContent = 'Please upload a document';
            feedbackElement.style.display = 'block';
          }
          allFilesValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      });
      
      if (!allFilesValid) {
        return false;
      }
      
      return true;
    }
    
    // Check if terms are accepted on the final step
    if (stepNumber === 5) {
      const termsCheck = document.getElementById('termsCheck');
      if (!termsCheck.checked) {
        termsCheck.classList.add('is-invalid');
        const feedbackElement = termsCheck.nextElementSibling.nextElementSibling;
        if (feedbackElement) {
          feedbackElement.style.display = 'block';
        }
        return false;
      }
      return true;
    }
    
    const { isValid, errors } = validateFormFields(formData, stepValidations);
    
    if (!isValid) {
      displayValidationErrors(errors, 'tradeLicenseForm');
      return false;
    }
    
    return true;
  }
  
  // Function to prepare review content
  function prepareReviewContent() {
    const reviewContent = document.getElementById('reviewContent');
    const formData = {};
    
    const inputs = tradeLicenseForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      if (input.name && input.name !== 'termsCheck' && input.type !== 'file') {
        if (input.type === 'checkbox') {
          formData[input.name] = input.checked;
        } else if (input.type === 'radio') {
          if (input.checked) {
            formData[input.name] = input.value;
          }
        } else {
          formData[input.name] = input.value;
        }
      }
    });
    
    let reviewHTML = `
      <div class="review-sections">
        <div class="review-section mb-4">
          <h5 class="border-bottom pb-2 mb-3">Business Details</h5>
          <div class="row">
            <div class="col-md-6 mb-2">
              <strong>Business Name:</strong> ${formData.businessName || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Business Type:</strong> ${document.getElementById('businessType')?.options[document.getElementById('businessType')?.selectedIndex]?.text || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Business Category:</strong> ${document.getElementById('businessCategory')?.options[document.getElementById('businessCategory')?.selectedIndex]?.text || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Start Date:</strong> ${formData.startDate || ''}
            </div>
            <div class="col-12 mb-2">
              <strong>Business Description:</strong> ${formData.businessDescription || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>PAN Number:</strong> ${formData.pan || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>GST Number:</strong> ${formData.gst || 'Not Provided'}
            </div>
          </div>
        </div>
        
        <div class="review-section mb-4">
          <h5 class="border-bottom pb-2 mb-3">Owner Information</h5>
          <div class="row">
            <div class="col-md-6 mb-2">
              <strong>Owner Name:</strong> ${formData.ownerName || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Designation:</strong> ${formData.designation || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Email:</strong> ${formData.email || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Phone:</strong> ${formData.phone || ''}
            </div>
            <div class="col-12 mb-2">
              <strong>Address:</strong> ${formData.address || ''}, ${formData.city || ''}, ${formData.state || ''} - ${formData.pincode || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>ID Type:</strong> ${document.getElementById('idType')?.options[document.getElementById('idType')?.selectedIndex]?.text || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>ID Number:</strong> ${formData.idNumber || ''}
            </div>
          </div>
        </div>
        
        <div class="review-section mb-4">
          <h5 class="border-bottom pb-2 mb-3">Business Location & Activity</h5>
          <div class="row">
            <div class="col-12 mb-2">
              <strong>Business Address:</strong> ${formData.businessAddress || ''}, ${formData.businessCity || ''}, ${formData.businessState || ''} - ${formData.businessPincode || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Premises Type:</strong> ${document.getElementById('premisesType')?.options[document.getElementById('premisesType')?.selectedIndex]?.text || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Premises Area:</strong> ${formData.premisesArea || ''} sq.ft
            </div>
            <div class="col-md-6 mb-2">
              <strong>Local Authority:</strong> ${document.getElementById('localAuthority')?.options[document.getElementById('localAuthority')?.selectedIndex]?.text || ''}
            </div>
            <div class="col-md-6 mb-2">
              <strong>Zone Type:</strong> ${document.getElementById('zoneType')?.options[document.getElementById('zoneType')?.selectedIndex]?.text || ''}
            </div>
            <div class="col-12 mb-2">
              <strong>Business Activities:</strong> 
              <ul class="mb-0">
                ${document.getElementById('activityRetail')?.checked ? '<li>Retail Trading</li>' : ''}
                ${document.getElementById('activityWholesale')?.checked ? '<li>Wholesale Trading</li>' : ''}
                ${document.getElementById('activityManufacturing')?.checked ? '<li>Manufacturing</li>' : ''}
                ${document.getElementById('activityServices')?.checked ? '<li>Services</li>' : ''}
                ${document.getElementById('activityFood')?.checked ? '<li>Food & Beverages</li>' : ''}
                ${document.getElementById('activityOther')?.checked ? '<li>Other</li>' : ''}
              </ul>
            </div>
          </div>
        </div>
        
        <div class="review-section">
          <h5 class="border-bottom pb-2 mb-3">Documents Submitted</h5>
          <div class="row">
            <div class="col-md-6 mb-2">
              <strong>ID Proof:</strong> Uploaded
            </div>
            <div class="col-md-6 mb-2">
              <strong>Address Proof:</strong> Uploaded
            </div>
            <div class="col-md-6 mb-2">
              <strong>Business Proof:</strong> Uploaded
            </div>
            <div class="col-md-6 mb-2">
              <strong>PAN Card:</strong> Uploaded
            </div>
            <div class="col-md-6 mb-2">
              <strong>Premises Document:</strong> Uploaded
            </div>
            <div class="col-md-6 mb-2">
              <strong>Passport Size Photo:</strong> Uploaded
            </div>
          </div>
        </div>
      </div>
    `;
    
    reviewContent.innerHTML = reviewHTML;
  }
  
  // Setup next button event listeners
  nextButtons.forEach(button => {
    button.addEventListener('click', function() {
      const currentStep = parseInt(this.closest('.form-step').getAttribute('data-step'));
      
      if (validateStep(currentStep)) {
        if (currentStep === 4) {
          // Prepare review content for final step
          prepareReviewContent();
        }
        
        showStep(currentStep + 1);
      }
    });
  });
  
  // Setup previous button event listeners
  prevButtons.forEach(button => {
    button.addEventListener('click', function() {
      const currentStep = parseInt(this.closest('.form-step').getAttribute('data-step'));
      showStep(currentStep - 1);
    });
  });
  
  // Setup form submission
  tradeLicenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateStep(5)) {
      // Show success message
      const formHTML = tradeLicenseForm.innerHTML;
      tradeLicenseForm.innerHTML = `
        <div class="alert alert-success p-5 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-check-circle-fill text-success mb-4" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <h3 class="mb-3">Application Submitted Successfully!</h3>
          <p class="lead mb-4">Your Trade License application has been received. Your application reference number is:</p>
          <p class="display-6 fw-bold mb-4">TL-${Math.floor(Math.random() * 9000) + 1000}-${new Date().getFullYear()}</p>
          <p class="mb-4">We will review your application and get back to you within 3-5 business days. You will receive an email with further instructions.</p>
          <div class="d-grid gap-2 col-md-6 mx-auto mt-4">
            <a href="#home" class="btn btn-primary btn-lg">Return to Home</a>
            <button type="button" class="btn btn-outline-primary" id="printReceipt">Print Receipt</button>
          </div>
        </div>
      `;
      
      // Add print functionality
      document.getElementById('printReceipt').addEventListener('click', function() {
        window.print();
      });
    }
  });
  
  // Setup form auto-save
  setupFormAutoSave('tradeLicenseForm');
}