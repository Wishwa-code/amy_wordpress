import { Star } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Verified Buyer',
            text: 'The Glow Serum is a game changer! My skin has never looked so radiant and healthy.',
            rating: 5,
            avatar: 'https://i.pravatar.cc/150?u=sarah',
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Skincare Enthusiast',
            text: 'I love how natural these products feel. No harsh chemicals, just pure goodness.',
            rating: 5,
            avatar: 'https://i.pravatar.cc/150?u=michael',
        },
        {
            id: 3,
            name: 'Emma Watson',
            role: 'Loyal Customer',
            text: 'Fast shipping and amazing results. I highly recommend AMY to everyone.',
            rating: 4,
            avatar: 'https://i.pravatar.cc/150?u=emma',
        },
    ];

    return (
        <section className="py-24 bg-[#FAF3F0] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.3em] text-brand-primary font-medium block mb-2 uppercase">
                        FEEDBACK
                    </span>
                    <h2 className="text-4xl font-serif text-[#2A1B10] mb-4">
                        To The Happy Customers
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto italic">
                        "Reviews are great because they give us confidence to do better and provide the best for you."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className={i < review.rating ? 'fill-brand-accent text-brand-accent' : 'text-gray-300'}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-8 italic text-sm leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="flex items-center">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="text-sm font-bold text-[#2A1B10]">{review.name}</h4>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
