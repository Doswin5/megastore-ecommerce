import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Newsletter, Footer } from './components';
import { HomePage } from './pages';

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
