import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './ilyas/Header'
import Analytics from './ilyas/Analytics'
import NotFound from "./ilyas/NotFound";
import Footer from "./ilyas/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/analysis" element={<Analytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;