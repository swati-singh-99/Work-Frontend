import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import UseCallback from "./useCallback";  
import UseMemo from "./useMemo";             

function Home() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/usememo" element={<UseMemo />} />
      </Routes>
    </Router>
  );
}

export default Home;
