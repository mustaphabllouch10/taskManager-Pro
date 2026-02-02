/**
 * Root layout component.
 * Defines routes and renders Header, Footer, and Toast on every page.
 */
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './ilyas/Header'
import Analytics from './ilyas/Analytics'
import NotFound from "./ilyas/NotFound";
import Footer from "./ilyas/Footer";
import Board from './mustapha/board.jsx';
import Team  from './azzedine/team.jsx'
import LandingPage from './mustapha/landingPage/landingPage.jsx';
import Toast from './ilyas/Toast.jsx';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/analysis" element={<Analytics />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toast />
      <Footer />
    </div>
  );
}
export default App;