import './App.css';

// Components
import Navbar from './components/Navbar';
import Buy from './components/Buy';
import Promo from "./components/Promo";
import Iphone from './components/Iphone';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id='main-content'>
      <Navbar />
      <Buy />
      <Promo />
      <Iphone />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
