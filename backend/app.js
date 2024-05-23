const env = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection string
const mongoURI = process.env.URI;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define a simple schema and model for demonstration
const ClientSchema = new mongoose.Schema({
  name: String,
  exercises: [{
    name: String,
    maxWeights: {
      oneRepMax: Number,
      threeRepMax: Number
    },
    maxReps: Map
  }]
});

const Client = mongoose.model('Client', ClientSchema);

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Express server with MongoDB');
});

// Route to create a new client
app.post('/clients', async (req, res) => {
  const { name, exercises } = req.body;

  const newClient = new Client({ name, exercises });

  try {
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all clients
app.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a client by ID
app.get('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update a client by ID
app.put('/clients/:id', async (req, res) => {
  const { name, exercises } = req.body;

  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      { name, exercises },
      { new: true, runValidators: true }
    );
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.json(client);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a client by ID
app.delete('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.json({ message: 'Client deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
