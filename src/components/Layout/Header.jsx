import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'SHOP', href: '/shop' },
        // { name: 'PRODUCTS', href: '/shop' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'BLOG', href: '#' },
        { name: 'CONTACT US', href: '#' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between relative">
                {/* Mobile Menu Icon */}
                <button
                    className="lg:hidden text-brand-primary z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
                    <Link to="/" className="text-3xl font-serif font-bold tracking-tighter text-brand-primary">
                        AMY
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8 mx-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-[12px] font-medium tracking-widest text-[#2A1B10] hover:text-brand-primary transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-3 sm:space-x-5 lg:w-[150px] justify-end">
                    <button className="text-brand-primary hover:scale-110 transition-transform">
                        <Search size={20} strokeWidth={1.5} />
                    </button>
                    <button className="text-brand-primary hover:scale-110 transition-transform hidden sm:block">
                        <User size={20} strokeWidth={1.5} />
                    </button>
                    <button className="text-brand-primary hover:scale-110 transition-transform hidden sm:block">
                        <Heart size={20} strokeWidth={1.5} />
                    </button>
                    <button className="text-brand-primary hover:scale-110 transition-transform relative">
                        <ShoppingBag size={20} strokeWidth={1.5} />
                        <span className="absolute -top-1 -right-1 bg-brand-accent text-[#2A1B10] text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xl font-serif text-brand-primary tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
