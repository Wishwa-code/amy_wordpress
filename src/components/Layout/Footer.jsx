import { Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#FAF3F0] pt-20 pb-10 border-t border-[#EBD9D1] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Newsletter Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between pb-16 border-b border-[#EBD9D1] mb-16">
                    <div className="mb-8 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-3xl font-serif text-[#2A1B10] mb-2">Ready for a refreshing news?</h2>
                        <p className="text-gray-500 text-sm">Join our newsletter and get 10% off your first order.</p>
                    </div>
                    <div className="relative w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-transparent border-b-2 border-brand-primary py-3 pr-12 focus:outline-none placeholder:text-gray-400 text-[#2A1B10]"
                        />
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-primary hover:scale-110 transition-transform">
                            <Send size={20} />
                        </button>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16 overflow-hidden">
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <h3 className="text-3xl font-serif font-bold text-brand-primary mb-6">AMY</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Premium skincare products crafted with nature's finest ingredients for your daily glow.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[12px] font-bold tracking-widest text-[#2A1B10] mb-6 uppercase">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>123 Beauty Lane, Glow City</li>
                            <li>+1 (234) 567-890</li>
                            <li>hello@amy-skincare.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[12px] font-bold tracking-widest text-[#2A1B10] mb-6 uppercase">Navigation</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Our Blog</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[12px] font-bold tracking-widest text-[#2A1B10] mb-6 uppercase">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Face Care</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Body Care</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Hair Care</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Best Sellers</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#EBD9D1] text-[10px] text-gray-400 tracking-widest uppercase font-bold">
                    <p className="mb-4 md:mb-0">© 2024 AMY SKINCARE. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
