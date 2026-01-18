import Layout from './components/Layout/Layout'
import Hero from './components/Home/Hero'
import ProductSection from './components/Home/ProductSection'
import PromoBanners from './components/Home/PromoBanners'
import Testimonials from './components/Home/Testimonials'
import BlogSection from './components/Home/BlogSection'

function App() {
  return (
    <Layout>
      <Hero />
      <ProductSection title="Shop By Category" subtitle="NEW RELEASES" />
      <PromoBanners />
      <ProductSection title="Monthly Deals" subtitle="SPECIAL OFFERS" />
      <Testimonials />
      <BlogSection />
    </Layout>
  )
}

export default App
