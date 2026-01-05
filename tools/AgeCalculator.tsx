
import React, { useState } from 'react';

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    
    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="max-w-md mx-auto space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Date of Birth</label>
        <input 
          type="date" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          value={dob} onChange={(e) => setDob(e.target.value)}
        />
      </div>
      
      <button onClick={calculate} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition">Calculate Age</button>

      {age && (
        <div className="grid grid-cols-3 gap-4 animate-in zoom-in-95 duration-300">
           <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
             <div className="text-2xl font-bold text-white">{age.years}</div>
             <div className="text-xs text-gray-500 uppercase tracking-tighter">Years</div>
           </div>
           <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
             <div className="text-2xl font-bold text-white">{age.months}</div>
             <div className="text-xs text-gray-500 uppercase tracking-tighter">Months</div>
           </div>
           <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
             <div className="text-2xl font-bold text-white">{age.days}</div>
             <div className="text-xs text-gray-500 uppercase tracking-tighter">Days</div>
           </div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
