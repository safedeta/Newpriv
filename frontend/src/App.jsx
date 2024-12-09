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
      <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">¡TailwindCSS funciona!</h1>
      </div>
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
