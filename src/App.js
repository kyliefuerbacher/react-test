import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/HomePage';
import UploadPage from './components/UploadPage';
import FinalPage from './components/FinalPage';
  
export default function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/uploadpage" element={<UploadPage/>} />
        <Route path="/finalpage" element={<FinalPage/>} />
      </Routes>
    </Router>

    </>
  );
}