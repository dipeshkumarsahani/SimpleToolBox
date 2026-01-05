
import React, { useState } from 'react';

const UUIDGenerator: React.FC = () => {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const generate = () => {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(crypto.randomUUID());
    }
    setUuids(results);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Number of UUIDs</label>
          <input 
            type="number" min="1" max="50" value={count} 
            onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-3 text-white"
          />
        </div>
        <button onClick={generate} className="px-8 h-[50px] mt-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition">Generate</button>
      </div>

      {uuids.length > 0 && (
        <div className="space-y-2">
           {uuids.map((uuid, i) => (
             <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-3 font-mono text-sm text-blue-400 flex justify-between items-center group">
               <span>{uuid}</span>
               <button 
                  onClick={() => navigator.clipboard.writeText(uuid)} 
                  className="p-1 hover:text-white transition" title="Copy"
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </button>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};

export default UUIDGenerator;
