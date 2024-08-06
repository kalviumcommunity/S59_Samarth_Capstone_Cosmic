import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Headers/Navbar";
import { Login, Logout, Register } from "./Login";


function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Services() {
  return <h2>Services Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Frontpage() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <main className="p-4">
          <header className="App-header text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to the Cosmic Capstone Project!
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              This project is dedicated to creating a comprehensive website that
              includes blogs, facts, theories, a discussion place, and
              day-to-day activities.
            </p>
          </header>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default Frontpage;
