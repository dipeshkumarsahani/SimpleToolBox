
import React from 'react';

interface LegalPageProps {
  title: string;
  content: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, content }) => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h1 className="text-4xl font-bold text-white mb-10">{title}</h1>
    <div className="prose prose-invert prose-blue max-w-none text-gray-400 leading-relaxed space-y-6">
      <p className="whitespace-pre-line">{content}</p>
    </div>
  </div>
);

export const AboutUs = () => (
  <LegalPage 
    title="About SimpleToolbox" 
    content={`SimpleToolbox was created with a single mission: to provide the most accessible, high-performance, and privacy-respecting online tools on the web.

    Why choose us?
    1. 100% Free: No hidden fees, no subscriptions.
    2. Privacy First: Most of our tools process data entirely within your browser.
    3. No Bloat: We avoid heavy animations and third-party trackers to ensure lightning-fast load times.
    4. Developer-Focused: Clean UI inspired by modern design standards like Vercel and GitHub.

    We are constantly adding new tools to our library. Our goal is to reach 100+ utilities by the end of the year.`}
  />
);

export const PrivacyPolicy = () => (
  <LegalPage 
    title="Privacy Policy" 
    content={`At SimpleToolbox, accessible from simpletoolbox.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SimpleToolbox and how we use it.

    No Personal Data Collection:
    We do not require users to register an account. We do not store any text or files you input into our tools. All processing happens on the client side using JavaScript unless explicitly stated otherwise.

    Log Files:
    Like many other websites, we follow a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, and date/time stamps. This is used for analyzing trends and site security.

    Cookies and Web Beacons:
    We use cookies to store information about visitors' preferences and to optimize the user experience.`}
  />
);

export const TermsOfService = () => (
  <LegalPage 
    title="Terms of Service" 
    content={`By accessing this website, you agree to be bound by these Terms and Conditions of Use.

    1. Use License:
    Permission is granted to use the tools on SimpleToolbox's website for personal or commercial use.

    2. Disclaimer:
    The materials on SimpleToolbox's website are provided on an 'as is' basis. SimpleToolbox makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.

    3. Limitations:
    In no event shall SimpleToolbox or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.`}
  />
);
