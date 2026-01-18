// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
                {product.isNew && (
                    <span className="absolute top-2 left-2 z-10 bg-brand-primary text-white text-[8px] font-bold px-2 py-0.5 tracking-tighter">
                        NEW
                    </span>
                )}

                <Link to={`/product/${product.slug}`} className="block w-full h-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>

                {/* Hover Actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex space-x-2 pointer-events-none group-hover:pointer-events-auto">
                    <button className="flex-grow bg-brand-primary text-white py-2 text-[10px] font-bold tracking-widest hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
                        <ShoppingBag size={14} /> ADD TO CART
                    </button>
                    <Link to={`/product/${product.slug}`} className="bg-white text-brand-primary p-2 hover:bg-brand-accent hover:text-white transition-colors flex items-center justify-center">
                        <Eye size={16} />
                    </Link>
                </div>
            </div>

            <div className="text-center">
                <p className="text-[10px] text-brand-accent font-medium tracking-widest uppercase mb-1">
                    {product.category}
                </p>
                <Link to={`/product/${product.slug}`}>
                    <h3 className="text-sm font-serif text-[#2A1B10] mb-1 group-hover:text-brand-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm font-bold text-brand-primary">
                    ${product.price}
                </p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
