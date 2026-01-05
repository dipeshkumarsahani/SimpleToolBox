
import React from 'react';
import { TOOLS } from '../constants';
import { AdSlotTop, AdSlotMiddle, AdSlotBottom } from '../components/Ads/AdSlots';
import WordCounter from '../tools/WordCounter';
import PasswordGenerator from '../tools/PasswordGenerator';
import JSONFormatter from '../tools/JSONFormatter';
import BMICalculator from '../tools/BMICalculator';
import UUIDGenerator from '../tools/UUIDGenerator';
import CaseConverter from '../tools/CaseConverter';
import SHA256Generator from '../tools/SHA256Generator';
import Base64Tool from '../tools/Base64Tool';
import AgeCalculator from '../tools/AgeCalculator';

interface ToolDetailProps {
  slug: string;
}

// Registry for fully functional tools
const TOOL_COMPONENTS: Record<string, React.ReactNode> = {
  'word-counter': <WordCounter />,
  'password-generator': <PasswordGenerator />,
  'json-formatter': <JSONFormatter />,
  'bmi-calculator': <BMICalculator />,
  'uuid-generator': <UUIDGenerator />,
  'case-converter': <CaseConverter />,
  'sha256-generator': <SHA256Generator />,
  'base64-encode-decode': <Base64Tool />,
  'age-calculator': <AgeCalculator />,
};

const ToolDetail: React.FC<ToolDetailProps> = ({ slug }) => {
  const tool = TOOLS.find(t => t.slug === slug);
  const ToolComponent = TOOL_COMPONENTS[slug];

  if (!tool) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">Tool Not Found</h2>
        <a href="#/" className="text-blue-500 hover:underline">Back to Homepage</a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AdSlotTop />

      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl text-blue-500 mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.icon} />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{tool.name}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{tool.description}</p>
      </div>

      {/* Actual Tool UI Container */}
      <div className="bg-[#111] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl mb-12">
        {ToolComponent || (
          <div className="text-center py-20 text-gray-500 italic">
            This tool is currently under maintenance. Please check back soon.
          </div>
        )}
      </div>

      <AdSlotMiddle />

      {/* SEO Content: How it Works */}
      <section className="prose prose-invert max-w-none mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
           <span className="w-6 h-1 bg-blue-500 mr-3 rounded-full"></span>
           How to use {tool.name}
        </h2>
        <div className="text-gray-400 leading-relaxed space-y-4">
          <p>{tool.howItWorks}</p>
          <p>
            At SimpleToolbox, we prioritize speed and efficiency. All calculations for {tool.name} are performed locally in your web browser. 
            This means your data never leaves your computer, ensuring 100% privacy and lightning-fast results without any server latency.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      {tool.faqs && tool.faqs.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {tool.faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <AdSlotBottom />
    </div>
  );
};

export default ToolDetail;
