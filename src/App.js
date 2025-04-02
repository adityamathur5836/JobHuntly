import './App.css';
import Category from './components/Category';
import Featured from './components/Featured';
import Helped from './components/Helped';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Latest from './components/Latest';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Helped />
        <Category />
        <Featured />
        <Latest />
        <Footer />
    </div>
  );
}

export default App;
