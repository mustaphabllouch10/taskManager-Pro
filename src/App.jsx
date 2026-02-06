/**
 * Root layout component.
 * Defines routes and renders Header, Footer, and Toast on every page.
 */
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './ilyas/Header'
import Analytics from './ilyas/Analytics'
import NotFound from "./ilyas/NotFound";
import Footer from "./ilyas/Footer";
import Board from './mustapha/board.jsx';
import Team from './azzedine/Team.jsx'
import LandingPage from './mustapha/landingPage/landingPage.jsx';
import Toast from './ilyas/Toast.jsx';
import Login from './ilyas/Login.jsx';
import { selectIsAuthenticated } from './redux/selectors.js';
import { useSelector } from 'react-redux';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/board"
          element={
            <ProtectedRoute>
              <Board />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analysis"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toast />
      <Footer />
    </div>
  );
}
export default App;