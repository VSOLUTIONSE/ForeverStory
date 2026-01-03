
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Gift, 
  MessageSquare, 
  Settings, 
  LayoutDashboard, 
  Edit3, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  Sparkles,
  CheckCircle,
  Plus,
  Users,
  Eye,
  TrendingUp,
  Clock
} from 'lucide-react';
import { MOCK_WEDDING } from './constants';
import { Wedding, Wish, WishCategory, GiftStatus } from './types';

// Components
import LandingPage from './components/LandingPage';
import StoryPage from './components/StoryPage';
import DashboardLayout from './components/DashboardLayout';
import Overview from './components/dashboard/Overview';
import WishesManager from './components/dashboard/WishesManager';
import GiftsManager from './components/dashboard/GiftsManager';
import StoryEditor from './components/dashboard/StoryEditor';
import SettingsPage from './components/dashboard/Settings';
import AuthPage from './components/AuthPage';
import SetupWizard from './components/SetupWizard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [weddingData, setWeddingData] = useState<Wedding | null>(MOCK_WEDDING);

  // Check mock session
  useEffect(() => {
    const authStatus = localStorage.getItem('fs_auth');
    if (authStatus === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('fs_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('fs_auth');
    setIsAuthenticated(false);
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
        
        {/* Public Story Page */}
        <Route path="/:slug" element={<StoryPage wedding={weddingData} />} />

        {/* Protected Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <DashboardLayout onLogout={handleLogout} /> : <Navigate to="/auth" />}
        >
          <Route index element={<Overview wedding={weddingData} />} />
          <Route path="story" element={<StoryEditor wedding={weddingData} setWedding={setWeddingData} />} />
          <Route path="wishes" element={<WishesManager />} />
          <Route path="gifts" element={<GiftsManager />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route 
          path="/setup" 
          element={isAuthenticated ? <SetupWizard onComplete={() => {}} /> : <Navigate to="/auth" />} 
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
