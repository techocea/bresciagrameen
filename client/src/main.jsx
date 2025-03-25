import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import About from "./pages/about";
import News from "./pages/news";
import Contact from "./pages/contact";
import WorkVisa from "./pages/work-visa";
import StudentVisa from "./pages/student-visa";
import StudyAbroad from "./pages/study-abroad";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "./components/error-page";

const Layout = () => {
  const location = useLocation();
  const transparentRoutes = [
    "/",
    "/services/work-visa",
    "/services/student-visa",
    "/services/study-abroad",
  ];
  const isTransparent = transparentRoutes.includes(location.pathname);

  return (
    <div>
      <Header isTransparent={isTransparent} />
      <Routes>
        <Route index element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/work-visa" element={<WorkVisa />} />
        <Route path="/services/student-visa" element={<StudentVisa />} />
        <Route path="/services/study-abroad" element={<StudyAbroad />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);
