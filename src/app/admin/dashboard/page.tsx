"use client";

import React, { JSX, useState } from "react";
import ArticleManager from "./components/ArticleManager";
import GalleryManager from "./components/GalleryManager";
import AlumniManager from "./components/AlumniManager";
import { FaNewspaper, FaImages, FaUserGraduate } from 'react-icons/fa';

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

  const TabButton = ({ tabName, icon, label }: { tabName: string; icon: JSX.Element; label: string }) => (
    <button 
      onClick={() => setActiveTab(tabName)} 
      className={`flex items-center gap-2 py-3 px-4 font-semibold rounded-t-lg transition-colors duration-300 ${
        activeTab === tabName 
          ? 'bg-white text-[#3572EF] border-b-2 border-[#3572EF]' 
          : 'text-[#071952] hover:bg-white/50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#E0F7FA]">
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#071952]">
          Dasbor Admin
        </h1>
        
        <div className="mb-8 border-b border-[#97FEED]">
          <nav className="flex space-x-2 md:space-x-4">
            <TabButton tabName="articles" icon={<FaNewspaper />} label="Artikel" />
            <TabButton tabName="gallery" icon={<FaImages />} label="Galeri" />
            <TabButton tabName="alumni" icon={<FaUserGraduate />} label="Alumni" />
          </nav>
        </div>

        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}