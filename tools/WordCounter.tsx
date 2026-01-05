
import React, { useState, useEffect } from 'react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    charsWithSpaces: 0,
    charsNoSpaces: 0,
    lines: 0,
    sentences: 0,
  });

  useEffect(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const charsWithSpaces = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const lines = text ? text.split(/\r\n|\r|\n/).length : 0;
    const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;

    setStats({ words, charsWithSpaces, charsNoSpaces, lines, sentences });
  }, [text]);

  return (
    <div className="space-y-6">
      <textarea
        className="w-full h-64 bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Words', value: stats.words },
          { label: 'Characters', value: stats.charsWithSpaces },
          { label: 'Chars (No Space)', value: stats.charsNoSpaces },
          { label: 'Lines', value: stats.lines },
          { label: 'Sentences', value: stats.sentences },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-xl text-center">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button 
          onClick={() => setText('')}
          className="px-6 py-2 bg-gray-800 hover:bg-red-900/20 hover:text-red-500 text-gray-400 rounded-lg transition font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default WordCounter;
