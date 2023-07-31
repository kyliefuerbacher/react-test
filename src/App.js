import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import Header from './components/Header';
import Home from './components/HomePage';
import UploadPage from './components/UploadPage';
import ParkingPage from './components/ParkingPage';
import ReviewPage from './components/ReviewPage';
import FinalPage from './components/FinalPage';
  
export default function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/uploadpage" element={<UploadPage/>} />
        <Route path="/parkingpage" element={<ParkingPage/>} />
        <Route path="/reviewpage" element={<ReviewPage/>} />
        <Route path="/finalpage" element={<FinalPage/>} />
      </Routes>
    </Router>

    </>
  );
}



/* Ibrahim's code
// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with your MongoDB database name
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a sample data collection schema
const sampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const SampleModel = mongoose.model('Sample', sampleSchema);

// CORS middleware
app.use(cors());

// Fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    const data = await SampleModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from MongoDB' });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
*/