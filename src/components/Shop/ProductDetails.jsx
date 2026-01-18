import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { wordpressService } from '../../services/wordpress';
import { Star, Minus, Plus, Heart, Share2 } from 'lucide-react';

const ProductDetails = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const data = await wordpressService.getProductBySlug(slug);
            setProduct(data);
            setLoading(false);
        };
        fetchProduct();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-[var(--brand-cream)]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--brand-cream)] pt-20">
                <h2 className="text-2xl font-serif text-[#2A1B10] mb-4">Product Not Found</h2>
                <Link to="/shop" className="text-brand-primary underline tracking-widest text-sm">
                    RETURN TO SHOP
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--brand-cream)] pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Breadcrumbs */}
                <div className="text-[10px] tracking-widest text-[#2A1B10]/60 mb-8 uppercase">
                    <Link to="/" className="hover:text-brand-primary">Home</Link> /
                    <Link to="/shop" className="hover:text-brand-primary mx-1">Shop</Link> /
                    <span className="text-brand-primary mx-1">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-white overflow-hidden relative">
                            {product.isNew && (
                                <span className="absolute top-4 left-4 z-10 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 tracking-tighter">
                                    NEW
                                </span>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <span className="text-[10px] tracking-[0.3em] text-brand-accent font-medium block mb-3 uppercase">
                            {product.category}
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-serif text-[#2A1B10] mb-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-2xl font-bold text-brand-primary">
                                ${product.price}
                            </span>
                            <div className="flex items-center text-[#E4B376]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                                <span className="text-[10px] text-gray-400 ml-2 tracking-widest">(0 REVIEWS)</span>
                            </div>
                        </div>

                        <div
                            className="text-gray-600 text-sm leading-relaxed mb-8 prose prose-sm font-light max-w-none"
                            dangerouslySetInnerHTML={{ __html: product.shortDescription }}
                        />

                        {/* Actions */}
                        <div className="flex items-center space-x-6 mb-8 border-b border-[#2A1B10]/10 pb-8">
                            <div className="flex items-center border border-[#2A1B10]/20 h-10 w-32">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-full flex items-center justify-center hover:bg-[#2A1B10]/5 transition-colors"
                                >
                                    <Minus size={14} />
                                </button>
                                <span className="flex-1 text-center font-medium text-sm">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-full flex items-center justify-center hover:bg-[#2A1B10]/5 transition-colors"
                                >
                                    <Plus size={14} />
                                </button>
                            </div>
                            <button className="flex-1 bg-brand-primary text-white h-10 text-[11px] font-bold tracking-[0.2em] hover:bg-brand-dark transition-all duration-300">
                                ADD TO CART
                            </button>
                        </div>

                        <div className="flex items-center space-x-6 text-[11px] tracking-widest font-bold text-[#2A1B10]/60">
                            <button className="flex items-center space-x-2 hover:text-brand-primary transition-colors uppercase">
                                <Heart size={16} /> <span>Add to Wishlist</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-brand-primary transition-colors uppercase">
                                <Share2 size={16} /> <span>Share</span>
                            </button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-[#2A1B10]/10 space-y-2 text-[11px] tracking-widest text-[#2A1B10]/60">
                            <p>SKU: <span className="text-[#2A1B10]">AMY-{product.id}</span></p>
                            <p>CATEGORY: <span className="text-[#2A1B10] uppercase">{product.category}</span></p>
                            <p>TAGS: <span className="text-[#2A1B10]">BEAUTY, SKINCARE, ORGANIC</span></p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-20">
                    <div className="flex justify-center space-x-8 lg:space-x-16 border-b border-[#2A1B10]/10 mb-10">
                        {['description', 'additional_information', 'reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border-b-2 ${activeTab === tab
                                        ? 'text-brand-primary border-brand-primary'
                                        : 'text-[#2A1B10]/40 border-transparent hover:text-brand-primary'
                                    }`}
                            >
                                {tab.replace('_', ' ')}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto prose prose-brand prose-sm">
                        {activeTab === 'description' && (
                            <div dangerouslySetInnerHTML={{ __html: product.description || product.shortDescription }} />
                        )}
                        {activeTab === 'additional_information' && (
                            <p className="text-gray-600 italic text-center">No additional information available.</p>
                        )}
                        {activeTab === 'reviews' && (
                            <p className="text-gray-600 italic text-center">There are no reviews yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
