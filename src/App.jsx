import React from "react";
import {MinimalistPortfolio} from "./pages/minimalist/MinimalistPortfolio";
import { DefaultPortfolio } from "./pages/default/DefaultPortfolio";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router basename="portfolio-react">
      <Routes>
        <Route path="/" element={< MinimalistPortfolio />} />
        <Route path="/old" element={< DefaultPortfolio />} />
      </Routes>
    </Router>
  )
}

export default App
