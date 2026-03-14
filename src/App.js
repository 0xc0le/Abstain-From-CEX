import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CexProvider } from './contexts/CexContext';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home/home';
import Cexed from './pages/cexed/cexed';
import Alternatives from './pages/alternatives/alternatives';
import DeFiTvl from './pages/defi-tvl/DeFiTvl';

function App() {
  return (
    <CexProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cexed" element={<Cexed />} />
            <Route path="/alternatives" element={<Alternatives />} />
            <Route path="/defi-tvl" element={<DeFiTvl />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CexProvider>
  );
}

export default App;
