import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Flooring from './pages/Flooring';
import Wall from './pages/Wall';
import Ecostec from './pages/Ecostec';
import Custom from './pages/Custom';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="flooring" element={<Flooring />} />
          <Route path="flooring/:productId" element={<ProductDetail />} />
          <Route path="wall" element={<Wall />} />
          <Route path="wall/:productId" element={<ProductDetail />} />
          <Route path="ecostec" element={<Ecostec />} />
          <Route path="ecostec/:productId" element={<ProductDetail />} />
          <Route path="custom" element={<Custom />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
