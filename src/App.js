import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume'

function App() {
  const [currentPage, handlePageChange] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="overflow-hidden">
      <Header handlePageChange={handlePageChange}></Header>
      <main>
       {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
