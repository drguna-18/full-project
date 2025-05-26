// Generate random date in the last 30 days
const getRandomDate = () => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - Math.floor(Math.random() * 30));
  return pastDate.toISOString();
};

// Generate random application ID
const generateApplicationId = (prefix) => {
  return `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
};

// Mock data for trade licenses
const tradeLicenses = [
  {
    id: 1,
    applicationId: generateApplicationId('TL'),
    name: 'John Smith',
    businessName: 'Smith Electronics Ltd.',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    businessType: 'Retail',
    location: 'New York',
    contactEmail: 'john.smith@example.com',
    contactPhone: '555-123-4567',
    updatedAt: null
  },
  {
    id: 2,
    applicationId: generateApplicationId('TL'),
    name: 'Emily Johnson',
    businessName: 'Green Grocers',
    dateSubmitted: getRandomDate(),
    status: 'Approved',
    businessType: 'Food & Beverage',
    location: 'Chicago',
    contactEmail: 'emily@greengrocers.com',
    contactPhone: '555-987-6543',
    updatedAt: getRandomDate()
  },
  {
    id: 3,
    applicationId: generateApplicationId('TL'),
    name: 'Michael Williams',
    businessName: 'Williams Construction',
    dateSubmitted: getRandomDate(),
    status: 'Rejected',
    businessType: 'Construction',
    location: 'Los Angeles',
    contactEmail: 'michael@williamsconstruction.com',
    contactPhone: '555-567-8901',
    updatedAt: getRandomDate()
  },
  {
    id: 4,
    applicationId: generateApplicationId('TL'),
    name: 'Jessica Brown',
    businessName: 'Jess Beauty Salon',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    businessType: 'Service',
    location: 'Miami',
    contactEmail: 'jessica@jessbeauty.com',
    contactPhone: '555-234-5678',
    updatedAt: null
  },
  {
    id: 5,
    applicationId: generateApplicationId('TL'),
    name: 'David Miller',
    businessName: 'Miller & Sons Hardware',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    businessType: 'Retail',
    location: 'Boston',
    contactEmail: 'david@millerhardware.com',
    contactPhone: '555-345-6789',
    updatedAt: null
  },
  {
    id: 6,
    applicationId: generateApplicationId('TL'),
    name: 'Sarah Davis',
    businessName: 'Davis Tech Solutions',
    dateSubmitted: getRandomDate(),
    status: 'Approved',
    businessType: 'Technology',
    location: 'Seattle',
    contactEmail: 'sarah@davistech.com',
    contactPhone: '555-456-7890',
    updatedAt: getRandomDate()
  },
  {
    id: 7,
    applicationId: generateApplicationId('TL'),
    name: 'Robert Wilson',
    businessName: 'Wilson Automotive',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    businessType: 'Automotive',
    location: 'Detroit',
    contactEmail: 'robert@wilsonauto.com',
    contactPhone: '555-567-8901',
    updatedAt: null
  }
];

// Mock data for GST registrations
const gstRegistration = [
  {
    id: 1,
    applicationId: generateApplicationId('GST'),
    name: 'Jennifer Taylor',
    businessName: 'Taylor Fashion House',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    businessType: 'Retail',
    annualTurnover: '$750,000',
    contactEmail: 'jennifer@taylorfashion.com',
    contactPhone: '555-123-7890',
    updatedAt: null
  },
  {
    id: 2,
    applicationId: generateApplicationId('GST'),
    name: 'Thomas Anderson',
    businessName: 'Anderson Consulting',
    dateSubmitted: getRandomDate(),
    status: 'Approved',
    businessType: 'Consulting',
    annualTurnover: '$1,500,000',
    contactEmail: 'thomas@andersonconsulting.com',
    contactPhone: '555-234-5678',
    updatedAt: getRandomDate()
  },
  {
    id: 3,
    applicationId: generateApplicationId('GST'),
    name: 'Lisa Martinez',
    businessName: 'Martinez Catering',
    dateSubmitted: getRandomDate(),
    status: 'Rejected',
    businessType: 'Food & Beverage',
    annualTurnover: '$350,000',
    contactEmail: 'lisa@martinezcatering.com',
    contactPhone: '555-345-6789',
    updatedAt: getRandomDate()
  },
  {
    id: 4,
    applicationId: generateApplicationId('GST'),
    name: 'James Wilson',
    businessName: 'Wilson & Partners Law Firm',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    businessType: 'Legal',
    annualTurnover: '$2,100,000',
    contactEmail: 'james@wilsonpartners.com',
    contactPhone: '555-456-7890',
    updatedAt: null
  },
  {
    id: 5,
    applicationId: generateApplicationId('GST'),
    name: 'Patricia Garcia',
    businessName: 'Garcia Home Goods',
    dateSubmitted: getRandomDate(),
    status: 'Approved',
    businessType: 'Retail',
    annualTurnover: '$850,000',
    contactEmail: 'patricia@garciahome.com',
    contactPhone: '555-567-8901',
    updatedAt: getRandomDate()
  },
  {
    id: 6,
    applicationId: generateApplicationId('GST'),
    name: 'Daniel Rodriguez',
    businessName: 'Rodriguez Transportation',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    businessType: 'Transportation',
    annualTurnover: '$1,300,000',
    contactEmail: 'daniel@rodrigueztransport.com',
    contactPhone: '555-678-9012',
    updatedAt: null
  }
];

// Mock data for environmental clearances
const environmentalClearance = [
  {
    id: 1,
    applicationId: generateApplicationId('EC'),
    name: 'Christopher Lee',
    businessName: 'Lee Manufacturing',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    projectType: 'Manufacturing',
    location: 'Phoenix',
    projectScale: 'Medium',
    contactEmail: 'chris@leemanufacturing.com',
    contactPhone: '555-123-4567',
    updatedAt: null
  },
  {
    id: 2,
    applicationId: generateApplicationId('EC'),
    name: 'Elizabeth White',
    businessName: 'White Renewable Energy',
    dateSubmitted: getRandomDate(),
    status: 'Approved',
    projectType: 'Energy',
    location: 'Denver',
    projectScale: 'Large',
    contactEmail: 'elizabeth@whiteenergy.com',
    contactPhone: '555-234-5678',
    updatedAt: getRandomDate()
  },
  {
    id: 3,
    applicationId: generateApplicationId('EC'),
    name: 'Andrew Harris',
    businessName: 'Harris Construction',
    dateSubmitted: getRandomDate(),
    status: 'Rejected',
    projectType: 'Construction',
    location: 'Portland',
    projectScale: 'Large',
    contactEmail: 'andrew@harrisconstruction.com',
    contactPhone: '555-345-6789',
    updatedAt: getRandomDate()
  },
  {
    id: 4,
    applicationId: generateApplicationId('EC'),
    name: 'Susan Clark',
    businessName: 'Clark Paper Mills',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    projectType: 'Manufacturing',
    location: 'Atlanta',
    projectScale: 'Large',
    contactEmail: 'susan@clarkpaper.com',
    contactPhone: '555-456-7890',
    updatedAt: null
  },
  {
    id: 5,
    applicationId: generateApplicationId('EC'),
    name: 'Matthew Lewis',
    businessName: 'Lewis Agricultural Farms',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    projectType: 'Agriculture',
    location: 'Sacramento',
    projectScale: 'Medium',
    contactEmail: 'matthew@lewisfarms.com',
    contactPhone: '555-567-8901',
    updatedAt: null
  },
  {
    id: 6,
    applicationId: generateApplicationId('EC'),
    name: 'Margaret Walker',
    businessName: 'Walker Chemical Solutions',
    dateSubmitted: getRandomDate(),
    status: 'Approved',
    projectType: 'Chemical',
    location: 'Houston',
    projectScale: 'Small',
    contactEmail: 'margaret@walkerchemical.com',
    contactPhone: '555-678-9012',
    updatedAt: getRandomDate()
  },
  {
    id: 7,
    applicationId: generateApplicationId('EC'),
    name: 'Richard King',
    businessName: 'King Mining Corporation',
    dateSubmitted: getRandomDate(),
    status: 'Rejected',
    projectType: 'Mining',
    location: 'Salt Lake City',
    projectScale: 'Large',
    contactEmail: 'richard@kingmining.com',
    contactPhone: '555-789-0123',
    updatedAt: getRandomDate()
  },
  {
    id: 8,
    applicationId: generateApplicationId('EC'),
    name: 'Laura Adams',
    businessName: 'Adams Waste Management',
    dateSubmitted: getRandomDate(),
    status: 'Pending',
    projectType: 'Waste Management',
    location: 'San Diego',
    projectScale: 'Medium',
    contactEmail: 'laura@adamswaste.com',
    contactPhone: '555-890-1234',
    updatedAt: null
  }
];

export const mockApplications = {
  tradeLicenses,
  gstRegistration,
  environmentalClearance
};