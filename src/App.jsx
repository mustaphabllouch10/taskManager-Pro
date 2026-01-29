import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './ilyas/Header'
import Analytics from './ilyas/Analytics'
import NotFound from "./ilyas/NotFound";
import Footer from "./ilyas/Footer";
import Board from './mustapha/board.jsx';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/analysis" element={<Analytics />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/board" element={<Board />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;