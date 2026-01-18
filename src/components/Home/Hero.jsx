// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
    const categories = [
        '#Face Care', '#Body Care', '#Hair Care', '#Skin Care', '#Make Up', '#Bath Accessories'
    ];

    return (
        <section className="relative w-full overflow-hidden pt-16">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[70vh]">
                {/* Left Panel - Image */}
                <div className="w-full lg:w-1/3 h-[50vh] lg:h-full relative overflow-hidden group order-1 lg:order-none">
                    <img
                        src="/assets/hero-model.png"
                        alt="Skincare Model"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Center Panel - Content */}
                <div className="w-full lg:w-1/3 h-auto lg:h-full bg-[#F4DCD1] flex flex-col items-center justify-center text-center px-6 py-16 lg:px-10 lg:py-0 order-2 lg:order-none">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[10px] tracking-[0.3em] text-brand-primary font-medium mb-4"
                    >
                        BEST SELLER
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-serif text-[#2A1B10] leading-tight mb-6"
                    >
                        Reveal Queen Nature Inside
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm italic text-[#555] mb-8 font-light"
                    >
                        Natural & Organic Skincare Products For Every Skin Type
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-3 bg-brand-primary text-white text-[12px] tracking-widest font-medium hover:bg-brand-dark transition-colors duration-300 shadow-lg"
                    >
                        VIEW COLLECTION
                    </motion.button>

                    <div className="flex mt-12 space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-white/50 border border-brand-primary"></div>
                    </div>
                </div>

                {/* Right Panel - Image */}
                <div className="w-full lg:w-1/3 h-[50vh] lg:h-full relative overflow-hidden group order-3 lg:order-none hidden lg:block">
                    <img
                        src="/assets/hero-product.png"
                        alt="Skincare Product"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Hero Footer / Category Bar */}
            <div className="bg-brand-primary py-4 px-4 overflow-x-auto">
                <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center items-center gap-6 lg:gap-12 min-w-max lg:min-w-0 mx-auto max-w-screen-xl">
                    {categories.map((cat, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="text-[10px] lg:text-[11px] font-serif italic text-white/90 hover:text-brand-accent transition-colors duration-200 tracking-wider whitespace-nowrap"
                        >
                            {cat}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
