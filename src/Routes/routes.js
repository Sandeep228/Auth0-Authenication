import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "../pages/Menu";

const Home = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Menu />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default Home;
