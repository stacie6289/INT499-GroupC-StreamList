import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Search from './components/Search';
import Watchlist from './components/Watchlist';
import Cart from './components/Cart';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
