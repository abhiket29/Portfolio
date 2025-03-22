// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Footer";
import ContactForm from "./components/ContactForm";

export const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      {/* <a
        href="https://wa.me/7837331298"
        className="z-50 fixed md:bottom-10 bottom-4 font-mono md:right-10 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
        target="_blank"
      >
        Chat with Me
      </a> */}

      <Router>
        {/* ✅ Navbar should be outside <Routes> */}
        <div className="container mx-auto px-8 md:px-[8rem] font-mono">
          <Navbar />
        </div>

        <div className="container mx-auto font-mono">
          <Routes>
            {/* ✅ Wrap all sections inside Home component */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Technologies />
                  <Experiences />
                  <Projects />
                  <Contact />
                </>
              }
            />

            {/* ✅ Separate route for Contact page */}
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        {/* <Contact/> */}
      </Router>
    </div>
  );
};
