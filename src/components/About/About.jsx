import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const features = [
        "Organic",
        "Sulfate-Free",
        "Paraben-Free",
        "100% Vegan",
        "Cruelty Free",
        "Lab-Tested"
    ];

    const stats = [
        { label: "Satisfied Customers", value: "95k+" },
        { label: "Beauty Products", value: "700+" },
        { label: "Stores Worldwide", value: "35+" },
        { label: "Total Sales", value: "50m+" },
        { label: "Year Of Experience", value: "15+" }
    ];

    const experts = [
        { name: "Pietrina Elise", role: "Skin Specialist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { name: "Erica Gabriella", role: "Makeup Artist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { name: "Cinzia Fabrizia", role: "Dermatologist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { name: "Linda Karla", role: "Product Developer", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    const testimonials = [
        { product: "Oil Free Lotion", feedback: "100% Chemical Free", image: "/assets/prod-cleanser.png" },
        { product: "Body Lotion", feedback: "Very Light & Pleasant", image: "/assets/prod-cream.png" },
        { product: "Foundation", feedback: "I Give Glowing Look", image: "/assets/prod-sunscreen.png" },
        { product: "Hair Conditioner", feedback: "My Hair Looks Stylish", image: "/assets/prod-serum.png" }
    ];

    return (
        <div className="bg-white min-h-screen pt-32">

            {/* Manufacturer Section */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] tracking-[0.3em] text-brand-primary font-medium block mb-4 uppercase">
                            About Us
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-[#2A1B10] mb-8 leading-tight">
                            Top Manufacturer Of Beauty And Cosmetics Items
                        </h2>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-cream flex items-center justify-center text-brand-primary">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium text-[#2A1B10] uppercase tracking-wider">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-8 py-3 bg-brand-primary text-white text-[11px] font-bold tracking-[0.2em] hover:bg-brand-dark transition-colors uppercase">
                                Load More
                            </button>
                            <a href="tel:+00123456789" className="flex items-center space-x-3 text-[#2A1B10] hover:text-brand-primary transition-colors group">
                                <div className="w-10 h-10 border border-[#2A1B10]/20 rounded-full flex items-center justify-center group-hover:border-brand-primary">
                                    <MessageCircle size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2A1B10]/60">Chat Us Anytime</span>
                                    <span className="font-serif text-lg">+00 123 456 789</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] bg-brand-cream overflow-hidden rounded-sm relative">
                            {/* Abstract decorative layout */}
                            <img
                                src="/assets/hero-model.png"
                                alt="Manufacturer"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border-[1px] border-white/30 m-4"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Promo Banner */}
            <section className="bg-[var(--brand-cream)] py-24 mb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl lg:text-5xl font-serif text-[#2A1B10] mb-6 leading-tight">
                            Shop & Get 20% Off On Cosmetic Products & Beauty Services
                        </h2>
                        <Link to="/shop">
                            <button className="px-8 py-3 bg-brand-primary text-white text-[11px] font-bold tracking-[0.2em] hover:bg-brand-dark transition-colors uppercase">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-brand-primary/20 flex items-center justify-center p-4">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img src="/assets/hero-product.png" alt="Discount" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-4 -right-4 bg-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12">
                                <span className="text-2xl font-bold text-brand-primary">20%</span>
                                <span className="text-[10px] uppercase font-medium">OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-brand-primary text-white py-20 mb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-white/10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center px-4">
                                <span className="text-3xl lg:text-4xl font-serif font-bold mb-2">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-widest opacity-80">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.3em] text-brand-primary font-medium block mb-2 uppercase">
                        Testimonials
                    </span>
                    <h2 className="text-3xl font-serif text-[#2A1B10]">
                        What Clients Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-[var(--brand-cream)] p-8 text-center group"
                        >
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm">
                                <img src={item.image} alt={item.product} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-lg font-serif text-[#2A1B10] mb-2">{item.feedback}</h3>
                            <p className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-4">{item.product}</p>
                            <div className="flex justify-center text-brand-accent space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-current"></div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Beauty Experts */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.3em] text-brand-primary font-medium block mb-2 uppercase">
                        Our Team
                    </span>
                    <h2 className="text-3xl font-serif text-[#2A1B10]">
                        Our Beauty Experts
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert, idx) => (
                        <div key={idx} className="group text-center">
                            <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                                <img
                                    src={expert.img}
                                    alt={expert.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-white/90 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-center space-x-4">
                                        {['Facebook', 'Twitter', 'Instagram'].map((s, i) => (
                                            <div key={i} className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-serif text-[#2A1B10]">{expert.name}</h3>
                            <p className="text-[10px] tracking-widest uppercase text-gray-500 mt-1">{expert.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
