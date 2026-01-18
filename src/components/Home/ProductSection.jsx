import { useState, useEffect } from 'react';
import ProductCard from '../Common/ProductCard';
import { wordpressService } from '../../services/wordpress';

const ProductSection = ({ title, subtitle }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await wordpressService.getProducts();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <section className="py-20 bg-[var(--brand-cream)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    {subtitle && (
                        <span className="text-[10px] tracking-[0.3em] text-brand-primary font-medium block mb-2 uppercase">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="text-3xl font-serif text-[#2A1B10]">
                        {title}
                    </h2>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <button className="px-8 py-2.5 border border-brand-primary text-brand-primary text-[10px] tracking-[0.2em] font-bold hover:bg-brand-primary hover:text-white transition-all duration-300">
                        VIEW ALL PRODUCTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
