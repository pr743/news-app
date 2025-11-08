import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Latest from "./components/Latest";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Sports from "./components/Sports";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Science from "./components/Science";
import Technology from "./components/Technology";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Navbar />

      <LoadingBar 
        color="#24b3e3e0" 
        progress={progress} 
        height={3} 
      />

      <div className="container mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/latest" element={<Latest setProgress={setProgress} />} />
          <Route path="/sports" element={<Sports setProgress={setProgress} />} />
          <Route path="/business" element={<Business setProgress={setProgress} />} />
          <Route path="/entertainment" element={<Entertainment setProgress={setProgress} />} />
          <Route path="/health" element={<Health setProgress={setProgress} />} />
          <Route path="/science" element={<Science setProgress={setProgress} />} />
          <Route path="/technology" element={<Technology setProgress={setProgress} />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;




