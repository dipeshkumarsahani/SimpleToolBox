
import React, { useState } from 'react';
import { CATEGORIES } from '../../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            <span className="brand-font text-xl font-bold tracking-tight text-white">SimpleToolbox</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#/" className="text-gray-300 hover:text-white transition">Home</a>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition flex items-center">
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                <div className="bg-[#111] border border-gray-800 rounded-xl shadow-2xl p-2">
                  {CATEGORIES.map(cat => (
                    <a key={cat.slug} href={`#/category/${cat.slug}`} className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
                      {cat.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#/about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#/contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-gray-800 px-4 pt-2 pb-6">
          <div className="space-y-4">
            <a href="#/" className="block text-gray-300">Home</a>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-4 mb-2">Categories</p>
            {CATEGORIES.map(cat => (
              <a key={cat.slug} href={`#/category/${cat.slug}`} className="block text-gray-400 pl-4 py-1">{cat.title}</a>
            ))}
            <a href="#/about" className="block text-gray-300 mt-4">About</a>
            <a href="#/contact" className="block text-gray-300">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
