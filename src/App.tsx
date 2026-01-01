import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import styles from './App.module.css';

// まだコンポーネントを作っていないので、仮のページを作っておきます
const Works = () => <h2>Works Page (作成中)</h2>;
const Photos = () => <h2>Photos Page (作成中)</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
        <MobileMenu />
      </div>
    </Router>
  );
}

export default App;