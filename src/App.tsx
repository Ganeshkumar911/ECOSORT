import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SortingGuidePage from './pages/SortingGuidePage';
import TrackingPage from './pages/TrackingPage';
import RecyclingCentersPage from './pages/RecyclingCentersPage';
import EducationPage from './pages/EducationPage';
import ProfilePage from './pages/ProfilePage';

import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sorting-guide" element={<SortingGuidePage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/centers" element={<RecyclingCentersPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;