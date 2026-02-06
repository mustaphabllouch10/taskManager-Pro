/**
 * Root layout component.
 * Defines routes and renders Header, Footer, and Toast on every page.
 */
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Analytics from './pages/AnalyticsPage';
import NotFound from './pages/NotFoundPage';
import Footer from './components/layout/Footer';
import Board from './pages/BoardPage';
import Team from './pages/TeamPage';
import LandingPage from './pages/LandingPage';
import Toast from './components/common/Toast';
import Login from './features/auth/Login';
import ScrollToTop from './components/common/ScrollToTop';
import ProtectedRoute from './components/security/ProtectedRoute';

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes */}
        <Route path="/board" element={
          <ProtectedRoute>
            <Board />
          </ProtectedRoute>
        }
        />

        <Route path="/analysis" element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
        />

        <Route path="/team" element={
          <ProtectedRoute>
            <Team />
          </ProtectedRoute>
        }
        />
      </Routes>

      <Toast />
      <Footer />
    </div>
  );
}
export default App;