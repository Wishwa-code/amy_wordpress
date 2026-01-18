
import Hero from './Hero'
import ProductSection from './ProductSection'
import PromoBanners from './PromoBanners'
import Testimonials from './Testimonials'
import BlogSection from './BlogSection'

const Home = () => {
    return (
        <>
            <Hero />
            <ProductSection title="Shop By Category" subtitle="NEW RELEASES" />
            <PromoBanners />
            <ProductSection title="Monthly Deals" subtitle="SPECIAL OFFERS" />
            <Testimonials />
            <BlogSection />
        </>
    )
}

export default Home
