
import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (w > 0 && h > 0) {
      setBmi(w / (h * h));
    }
  };

  const getStatus = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: 'text-blue-400' };
    if (val < 25) return { text: 'Normal weight', color: 'text-green-400' };
    if (val < 30) return { text: 'Overweight', color: 'text-yellow-400' };
    return { text: 'Obese', color: 'text-red-500' };
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Weight (kg)</label>
          <input 
            type="number" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 70"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Height (cm)</label>
          <input 
            type="number" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 175"
          />
        </div>
        <button onClick={calculate} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold">Calculate BMI</button>
      </div>

      {bmi !== null && (
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Your Result</div>
          <div className="text-4xl font-bold text-white mb-2">{bmi.toFixed(1)}</div>
          <div className={`text-lg font-semibold ${getStatus(bmi).color}`}>{getStatus(bmi).text}</div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
