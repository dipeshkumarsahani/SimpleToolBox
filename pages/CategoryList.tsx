
import React from 'react';
import { CATEGORIES, TOOLS } from '../constants';

interface CategoryListProps {
  slug: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ slug }) => {
  const category = CATEGORIES.find(c => c.slug === slug);
  const categoryTools = TOOLS.filter(t => CATEGORIES.find(c => c.title === t.category)?.slug === slug);

  if (!category) return <div className="p-10 text-center text-white">Category not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">{category.title}</h1>
        <p className="text-gray-400 text-lg max-w-2xl">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map(tool => (
          <a key={tool.id} href={`#/tools/${tool.slug}`} className="p-6 bg-[#111] border border-gray-800 rounded-2xl hover:border-blue-500/50 hover:bg-[#161616] transition-all group">
            <div className="text-blue-500 mb-4">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={tool.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{tool.description}</p>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">{tool.category}</span>
          </a>
        ))}
      </div>
      
      {categoryTools.length === 0 && (
          <div className="bg-[#111] p-10 rounded-2xl text-center border border-gray-800">
            <p className="text-gray-500">More tools coming soon to this category!</p>
          </div>
      )}
    </div>
  );
};

export default CategoryList;
