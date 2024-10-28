// src/App.js
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/commons/Footer";
import Header from "./components/commons/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import ScrollToTop from "./components/ScrollToTop";
// import Contact from "./components/Contact";

const App = () => {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "education":
        educationRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        resumeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "blog":
        blogRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "footer":
        footerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <Router>
      <div className="bg-gray-50">
        <Header scrollToSection={scrollToSection} />

        {/* Sections */}
        <section ref={homeRef} id="home">
          <Home />
        </section>
        <section ref={experienceRef} id="experience">
          <Experience />
        </section>
        <section ref={educationRef} id="education">
          <Education />
        </section>
        <section
          ref={resumeRef}
          id="resume"
          className="flex justify-center items-center min-h-screen"
        >
          <Resume />
        </section>
        <section ref={portfolioRef} id="portfolio">
          <Portfolio />
        </section>
        <section ref={blogRef} id="blog">
          <Blog />
        </section>
        <section ref={footerRef} id="footer">
          <Footer />
        </section>
        <ScrollToTop/>
      </div>
    </Router>
  );
};

export default App;

{
  /* <Routes>
          <Route path="/contact" element={<Contact />} />
     </Routes>  */
}
