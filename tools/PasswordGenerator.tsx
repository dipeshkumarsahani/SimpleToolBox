
import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: true
  });
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const charset = {
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lower: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    let characters = '';
    if (options.upper) characters += charset.upper;
    if (options.lower) characters += charset.lower;
    if (options.numbers) characters += charset.numbers;
    if (options.symbols) characters += charset.symbols;

    if (!characters) return alert('Please select at least one character type');

    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 flex items-center justify-between">
        <span className="text-xl font-mono text-blue-400 break-all">{password || 'Click Generate...'}</span>
        {password && (
          <button onClick={copyToClipboard} className="ml-4 p-2 text-gray-400 hover:text-white transition">
            {copied ? 'Copied!' : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-gray-300">Length: {length}</label>
          </div>
          <input 
            type="range" min="4" max="50" value={length} 
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(options).map(([key, value]) => (
            <label key={key} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox" checked={value}
                onChange={() => setOptions(prev => ({ ...prev, [key]: !prev[key as keyof typeof options] }))}
                className="w-5 h-5 bg-gray-800 border-gray-700 rounded text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-400 group-hover:text-white transition capitalize">{key === 'upper' ? 'Uppercase' : key === 'lower' ? 'Lowercase' : key}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        onClick={generatePassword}
        className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg transition-all active:scale-[0.98]"
      >
        Generate Secure Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
