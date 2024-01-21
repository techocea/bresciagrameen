import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./pages/about";
import Loan from "./pages/loan";
import Migrationloans from "./pages/migrationloans";
import Studentloans from "./pages/studentloans";
import StudyAbroad from "./pages/studyabroad";
import Goldpawning from "./pages/goldpawning";
import Westernunion from "./pages/westernunion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/loans" element={<Loan />} />
      <Route path="/migration-loans" element={<Migrationloans />} />
      <Route path="/student-loans" element={<Studentloans />} />
      <Route path="/study-abroad" element={<StudyAbroad />} />
      <Route path="/gold-pawning" element={<Goldpawning />} />
      <Route path="/western-union" element={<Westernunion />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
