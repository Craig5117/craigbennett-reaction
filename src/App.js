import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
