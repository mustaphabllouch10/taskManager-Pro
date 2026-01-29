import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from '../src/ilyas/Header'
import Analytics from '../src/ilyas/Analytics'

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/analysis" element={<Analytics />} />
      </Routes>
    </div>
  );
}
export default App;