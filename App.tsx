
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';
import ToolDetail from './pages/ToolDetail';
import { AboutUs, PrivacyPolicy, TermsOfService } from './pages/LegalPages';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderRoute = () => {
    if (currentPath === '#/') return <Home />;
    if (currentPath.startsWith('#/category/')) {
      const slug = currentPath.replace('#/category/', '');
      return <CategoryList slug={slug} />;
    }
    if (currentPath.startsWith('#/tools/')) {
      const slug = currentPath.replace('#/tools/', '');
      return <ToolDetail slug={slug} />;
    }
    if (currentPath === '#/about') return <AboutUs />;
    if (currentPath === '#/privacy') return <PrivacyPolicy />;
    if (currentPath === '#/terms') return <TermsOfService />;
    if (currentPath === '#/contact') return <div className="p-20 text-center text-white">Contact Page: Please email us at support@simpletoolbox.com</div>;
    
    return <Home />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
