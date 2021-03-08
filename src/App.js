import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume'

function App() {
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <main>
        <About />
        <Portfolio></Portfolio>
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
