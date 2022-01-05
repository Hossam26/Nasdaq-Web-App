import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExploreScreen from './ExploreScreen/ExploreScreen'
import StockDetails from './StockDetails/StockDetails'
import Splash from './SplashScreen/SplashScreen'
function App(){
  const [load,setLoad]=useState<boolean>(true)
  useEffect(()=>{

 setTimeout(() => {
   setLoad(false)
 }, 6000);

  },[])
  return (
    <Router>
      <Splash Loading={load} />

      <Routes>
        <Route path="/" element={<ExploreScreen />} />
        <Route path="/StockDetails/:id" element={<StockDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
