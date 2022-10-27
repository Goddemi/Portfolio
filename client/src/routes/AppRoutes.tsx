import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Nav from "../components/nav/Nav";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
