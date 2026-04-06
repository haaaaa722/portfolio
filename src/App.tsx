import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppContent from "./AppContent";

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;