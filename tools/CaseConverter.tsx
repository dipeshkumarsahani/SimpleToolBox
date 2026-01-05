
import React, { useState } from 'react';

const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');

  const transform = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    let result = text;
    if (type === 'upper') result = text.toUpperCase();
    if (type === 'lower') result = text.toLowerCase();
    if (type === 'title') {
      result = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }
    if (type === 'sentence') {
      result = text.toLowerCase().replace(/(^\w|\.\s*\w)/g, (m) => m.toUpperCase());
    }
    setText(result);
  };

  return (
    <div className="space-y-6">
      <textarea
        className="w-full h-64 bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white font-sans focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="flex flex-wrap gap-3">
        <button onClick={() => transform('upper')} className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold">UPPERCASE</button>
        <button onClick={() => transform('lower')} className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold">lowercase</button>
        <button onClick={() => transform('title')} className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold">Title Case</button>
        <button onClick={() => transform('sentence')} className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-semibold">Sentence case</button>
        <button onClick={() => setText('')} className="ml-auto px-5 py-2 text-gray-500 hover:text-red-500">Clear</button>
      </div>
    </div>
  );
};

export default CaseConverter;
