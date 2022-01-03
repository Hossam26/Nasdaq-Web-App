import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExploreScreen from './ExploreScreen/ExploreScreen'
import StockDetails from './StockDetails/StockDetails'
function App() {
  
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<ExploreScreen />} />
        <Route path="/StockDetails/:id" element={<StockDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
