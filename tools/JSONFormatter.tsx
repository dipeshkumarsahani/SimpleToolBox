
import React, { useState } from 'react';

const JSONFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJSON = (minify = false) => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      const formatted = minify ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError('');
    } catch (err: any) {
      setError('Invalid JSON: ' + err.message);
      setOutput('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Raw Input</label>
          <textarea
            className="w-full h-96 bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 font-mono text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='{"key": "value"}'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Formatted Output</label>
          <textarea
            readOnly
            className={`w-full h-96 bg-[#0a0a0a] border ${error ? 'border-red-500/50' : 'border-gray-800'} rounded-xl p-4 font-mono text-sm text-blue-400 focus:outline-none`}
            placeholder="Result will appear here..."
            value={output || error}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button onClick={() => formatJSON(false)} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition">Format (Prettify)</button>
        <button onClick={() => formatJSON(true)} className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition">Minify</button>
        <button onClick={() => { setInput(''); setOutput(''); setError(''); }} className="px-6 py-3 border border-gray-800 text-gray-500 hover:text-red-500 hover:border-red-500/50 rounded-xl transition">Clear</button>
      </div>
    </div>
  );
};

export default JSONFormatter;
