import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { wordpressService } from '../../services/wordpress';

const BlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await wordpressService.getPosts();
            if (data && data.length > 0) {
                setPosts(data.slice(0, 3));
            }
            setLoading(false);
        };
        fetchPosts();
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.3em] text-brand-primary font-medium block mb-2 uppercase">
                        OUR BLOG
                    </span>
                    <h2 className="text-4xl font-serif text-[#2A1B10]">
                        Love Beauty Tips
                    </h2>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {posts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                                    <img
                                        src={post.image || 'https://via.placeholder.com/600x400'}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] text-brand-accent font-bold tracking-widest uppercase">
                                        SKINCARE • {post.date}
                                    </span>
                                    <h3 className="text-xl font-serif text-[#2A1B10] group-hover:text-brand-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 italic">
                                        {post.excerpt}
                                    </p>
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-[11px] font-bold tracking-widest text-[#2A1B10] border-b border-[#2A1B10] pb-1 pt-2 hover:text-brand-primary hover:border-brand-primary transition-all"
                                    >
                                        READ MORE
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
