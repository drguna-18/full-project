import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock database
const users = [];
const applications = [];

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Auth routes
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    users.push({
      id: users.length + 1,
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'your-secret-key');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Application routes
app.post('/api/applications', authenticateToken, (req, res) => {
  const application = {
    id: applications.length + 1,
    userId: req.user.id,
    status: 'pending',
    submittedDate: new Date(),
    ...req.body
  };
  
  applications.push(application);
  res.status(201).json(application);
});

app.get('/api/applications', authenticateToken, (req, res) => {
  const userApplications = applications.filter(app => app.userId === req.user.id);
  res.json(userApplications);
});

app.get('/api/expert/applications', authenticateToken, (req, res) => {
  const pendingApplications = applications.filter(app => app.status === 'pending');
  res.json(pendingApplications);
});

app.patch('/api/applications/:id/status', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const application = applications.find(app => app.id === parseInt(id));
  if (!application) return res.status(404).json({ error: 'Application not found' });
  
  application.status = status;
  res.json(application);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});