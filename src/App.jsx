import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/Shop/ProductDetails';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          {/* Added alias to match the user's reference URL structure if they expect it */}
          <Route path="/product-type-3" element={<Shop />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
