import { useState, useEffect } from 'react';
import ProductCard from '../Common/ProductCard';
import { wordpressService } from '../../services/wordpress';

const Shop = () => {
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
        <div className="pt-32 pb-20 bg-[var(--brand-cream)] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.3em] text-brand-primary font-medium block mb-2 uppercase">
                        Our Collection
                    </span>
                    <h1 className="text-4xl font-serif text-[#2A1B10]">
                        Shop All Products
                    </h1>
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
            </div>
        </div>
    );
};

export default Shop;
