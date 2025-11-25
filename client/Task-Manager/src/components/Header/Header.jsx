import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Zap, Users, BarChart3, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 text-white backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">TaskFlow</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <button className="px-4 py-2 text-sm hover:text-purple-400 transition-colors  cursor-pointer">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer">
                Get Started
              </button>
            </Link>

            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 text-white">
              <a href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="block hover:text-purple-400 transition-colors">How It Works</a>
              <a href="#pricing" className="block hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="block hover:text-purple-400 transition-colors">Testimonials</a>
              <Link to="/signin">
              <button  className="w-full px-4 py-2 text-sm border border-purple-500 rounded-full hover:bg-purple-500/10 transition-colors">Sign In</button>
             </Link>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">Get Started</button>
            </div>
          )}
        </nav>
      </header>
);
}