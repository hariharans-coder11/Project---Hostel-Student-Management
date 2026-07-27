import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import StudentDashboard from './layouts/StudentDashboard';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import OutpassPage from './pages/OutpassPage';
import MaintenancePage from './pages/MaintenancePage';
import MessMenuPage from './pages/MessMenuPage';
import NoticeBoardPage from './pages/NoticeBoardPage';
import EmergencyPage from './pages/EmergencyPage';

// Protect routes component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

// Redirect to dashboard if already logged in
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } 
          />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="outpass" element={<OutpassPage />} />
            <Route path="maintenance" element={<MaintenancePage />} />
            <Route path="mess-menu" element={<MessMenuPage />} />
            <Route path="notices" element={<NoticeBoardPage />} />
            <Route path="emergency" element={<EmergencyPage />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
