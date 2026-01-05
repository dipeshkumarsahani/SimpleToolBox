
import React, { useState } from 'react';

const SHA256Generator: React.FC = () => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  const generate = async () => {
    if (!input) return;
    const msgUint8 = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs text-gray-500 uppercase tracking-widest">Input String</label>
        <input 
          type="text" value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
      
      <button onClick={generate} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold">Generate SHA-256 Hash</button>

      {hash && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 overflow-hidden">
          <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Result Hash</label>
          <p className="font-mono text-blue-400 break-all">{hash}</p>
          <button 
            onClick={() => navigator.clipboard.writeText(hash)}
            className="mt-4 text-xs font-bold text-gray-400 hover:text-white"
          >
            Copy Hash
          </button>
        </div>
      )}
    </div>
  );
};

export default SHA256Generator;
