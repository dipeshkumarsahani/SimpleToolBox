
import React, { useState, useMemo } from 'react';
import { CATEGORIES, TOOLS } from '../constants';
import { AdSlotTop } from '../components/Ads/AdSlots';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchQuery) return [];
    return TOOLS.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tool.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6);
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Simple, Fast & Free <br/> <span className="text-blue-500">Online Tools</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            All your daily tools in one clean toolbox. 100% Client-side. No trackers. No sign-ups required.
          </p>

          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search tools (e.g. Password Generator, Word Counter...)"
              className="w-full px-6 py-4 bg-[#111] border border-gray-800 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {filteredTools.length > 0 && (
               <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl z-20">
                 {filteredTools.map(tool => (
                   <a key={tool.id} href={`#/tools/${tool.slug}`} className="block px-6 py-3 hover:bg-gray-800 text-left transition border-b border-gray-800 last:border-0">
                     <span className="text-white font-medium">{tool.name}</span>
                     <span className="text-gray-500 text-sm block">{tool.category}</span>
                   </a>
                 ))}
               </div>
            )}
          </div>
        </section>

        <AdSlotTop />

        {/* Categories Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-1 bg-blue-500 mr-3 rounded-full"></span>
            Browse Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(category => (
              <a key={category.slug} href={`#/category/${category.slug}`} className="group p-6 bg-[#111] border border-gray-800 rounded-2xl hover:border-blue-500/50 hover:bg-[#161616] transition-all duration-300">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={category.icon} />
                   </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{category.description}</p>
                <div className="text-blue-500 text-sm font-semibold flex items-center">
                   Explore Tools
                   <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Popular Tools */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-1 bg-purple-500 mr-3 rounded-full"></span>
              Popular Tools
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TOOLS.slice(0, 8).map(tool => (
              <a key={tool.id} href={`#/tools/${tool.slug}`} className="p-5 bg-[#111] border border-gray-800 rounded-xl hover:bg-[#1a1a1a] transition text-center group">
                <div className="text-gray-400 mb-3 group-hover:text-purple-500 transition-colors">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={tool.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-sm font-medium text-white block">{tool.name}</span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
