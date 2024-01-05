/** @format */

import "./index.css";
import React from "react";
import Home from "./pages/homep";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Msg from "./pages/msg";
import Intro from "./components/introduction";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/msg" element={<Msg />} />
          <Route path="/intro" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
