import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import AirlineDetailPage from "./routes/AirlineDetailPage";
import { AirlinesContextProvider } from './context/AirlinesContext';

const App = () => {
  return (
    <AirlinesContextProvider>
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/airlines/:id/update" element={<UpdatePage />} />
          <Route exact path="/airlines/:id" element={<AirlineDetailPage />} />
        </Routes>
      </Router>
    </div>
    </AirlinesContextProvider>

  );
}

export default App;
