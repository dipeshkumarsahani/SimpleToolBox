
import React, { useState } from 'react';

const Base64Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleAction = (type: 'encode' | 'decode') => {
    try {
      if (type === 'encode') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
      setError('');
    } catch (err) {
      setError('Error: Operation failed. Please check your input.');
      setOutput('');
    }
  };

  return (
    <div className="space-y-6">
      <textarea
        className="w-full h-48 bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white font-mono"
        placeholder="Enter data here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <div className="flex gap-4">
        <button onClick={() => handleAction('encode')} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold">Encode</button>
        <button onClick={() => handleAction('decode')} className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold">Decode</button>
      </div>

      { (output || error) && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
           <p className={`font-mono text-sm break-all ${error ? 'text-red-500' : 'text-blue-400'}`}>
             {error || output}
           </p>
        </div>
      )}
    </div>
  );
};

export default Base64Tool;
