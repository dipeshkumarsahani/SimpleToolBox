
import React from 'react';
import { CATEGORIES } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="brand-font text-xl font-bold text-white">SimpleToolbox</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your one-stop destination for simple, fast, and free online tools. We focus on privacy, accuracy, and ease of use.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Tools</h4>
            <ul className="space-y-3">
              {CATEGORIES.slice(0, 5).map(cat => (
                <li key={cat.slug}><a href={`#/category/${cat.slug}`} className="text-gray-500 hover:text-blue-500 text-sm transition">{cat.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#/about" className="text-gray-500 hover:text-blue-500 text-sm transition">About Us</a></li>
              <li><a href="#/contact" className="text-gray-500 hover:text-blue-500 text-sm transition">Contact</a></li>
              <li><a href="#/privacy" className="text-gray-500 hover:text-blue-500 text-sm transition">Privacy Policy</a></li>
              <li><a href="#/terms" className="text-gray-500 hover:text-blue-500 text-sm transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-500 text-sm mb-4">No trackers, no nonsense. Just tools.</p>
            <div className="flex space-x-4">
               {/* Placeholder icons */}
               <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">G</div>
               <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">X</div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} SimpleToolbox. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with Privacy and Speed in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
