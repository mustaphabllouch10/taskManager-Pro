import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from '../src/ilyas/Header'
import Analytics from '../src/ilyas/Analytics'
import Board from './mustapha/board.jsx';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/analysis" element={<Analytics />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}
export default App;