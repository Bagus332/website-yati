"use client";

import { useState } from "react";
import ArticleManager from "./components/ArticleManager";
import GalleryManager from "./components/GalleryManager";
import AlumniManager from "./components/AlumniManager";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('articles');

  const renderContent = () => {
    switch (activeTab) {
      case 'gallery':
        return <GalleryManager />;
      case 'alumni':
        return <AlumniManager />;
      case 'articles':
      default:
        return <ArticleManager />;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dasbor Admin</h1>
      
      <div className="mb-8 border-b border-gray-200">
        <nav className="flex space-x-2 md:space-x-4">
          <button onClick={() => setActiveTab('articles')} className={`py-3 px-4 font-semibold rounded-t-lg ${activeTab === 'articles' ? 'bg-white border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}>Kelola Artikel</button>
          <button onClick={() => setActiveTab('gallery')} className={`py-3 px-4 font-semibold rounded-t-lg ${activeTab === 'gallery' ? 'bg-white border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}>Kelola Galeri</button>
          <button onClick={() => setActiveTab('alumni')} className={`py-3 px-4 font-semibold rounded-t-lg ${activeTab === 'alumni' ? 'bg-white border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}>Kelola Alumni</button>
        </nav>
      </div>

      <div>
        {renderContent()}
      </div>
    </div>
  );
}