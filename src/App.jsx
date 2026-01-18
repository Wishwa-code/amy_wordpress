import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* Added alias to match the user's reference URL structure if they expect it */}
          <Route path="/product-type-3" element={<Shop />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
