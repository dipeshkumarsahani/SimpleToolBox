
import React from 'react';

const AdBase: React.FC<{ label: string; height?: string }> = ({ label, height = 'h-32' }) => (
  <div className={`w-full bg-[#111] border border-dashed border-gray-700 flex items-center justify-center text-xs text-gray-500 rounded-lg my-6 ${height}`}>
    <div className="text-center">
      <p className="font-mono mb-1">ADVERTISEMENT</p>
      <p>{label}</p>
    </div>
  </div>
);

export const AdSlotTop: React.FC = () => <AdBase label="Top Banner Slot" height="h-24 md:h-32" />;
export const AdSlotMiddle: React.FC = () => <AdBase label="In-Content Slot" height="h-64" />;
export const AdSlotBottom: React.FC = () => <AdBase label="Bottom Banner Slot" height="h-48" />;
