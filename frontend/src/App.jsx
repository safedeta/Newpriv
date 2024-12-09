import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
