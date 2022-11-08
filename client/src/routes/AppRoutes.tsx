import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";
import Contact from "../pages/contact/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
