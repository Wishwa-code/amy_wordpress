// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const PromoBanners = () => {
    const banners = [
        {
            title: 'Natural Skincare',
            subtitle: 'ORGANIC COLLECTION',
            image: '/assets/promo-1.png',
            button: 'SHOP NOW',
        },
        {
            title: 'Radiant Glow',
            subtitle: 'NEW ARRIVALS',
            image: '/assets/promo-2.png',
            button: 'DISCOVER MORE',
        },
    ];

    return (
        <section className="py-10 bg-[var(--brand-cream)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {banners.map((banner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] overflow-hidden group"
                        >
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#2A1B10]/20 group-hover:bg-[#2A1B10]/30 transition-colors duration-300 flex flex-col items-start justify-center p-12">
                                <span className="text-[10px] tracking-[0.3em] text-white font-medium mb-2">
                                    {banner.subtitle}
                                </span>
                                <h2 className="text-3xl font-serif text-white mb-6">
                                    {banner.title}
                                </h2>
                                <button className="px-8 py-2.5 bg-brand-primary text-white text-[10px] tracking-[0.2em] font-bold hover:bg-white hover:text-brand-primary transition-all duration-300">
                                    {banner.button}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;
