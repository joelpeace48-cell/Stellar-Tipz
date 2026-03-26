import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './features/landing/LandingPage';

// Feature pages - will be implemented in frontend issues
import DashboardPage from './features/dashboard/DashboardPage';
import ProfilePage from './features/profile/ProfilePage';
import ProtectedRoute from './components/shared/ProtectedRoute';
import ToastContainer from './components/shared/ToastContainer';
// import TipPage from './features/tipping/TipPage';
// import LeaderboardPage from './features/leaderboard/LeaderboardPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            {/* Routes to be enabled as features are built:
            <Route path="/@:username" element={<TipPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            */}
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
