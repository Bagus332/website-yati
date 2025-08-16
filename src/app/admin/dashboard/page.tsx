"use client";

import React, { JSX, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ArticleManager from "./components/ArticleManager";
import GalleryManager from "./components/GalleryManager";
import AlumniManager from "./components/AlumniManager";
import CarouselManager from "./components/CarouselManager"; // Impor komponen baru
import AdminNavbar from "@/components/AdminNavbar";
import { FaNewspaper, FaImages, FaUserGraduate, FaPhotoVideo } from "react-icons/fa"; // Tambahkan ikon baru

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("articles");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin");
      } else {
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <p className="text-xl text-gray-500">Memuat...</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "gallery":
        return <GalleryManager />;
      case "alumni":
        return <AlumniManager />;
      case "carousel": // Tambahkan case baru
        return <CarouselManager />;
      case "articles":
      default:
        return <ArticleManager />;
    }
  };

  const TabButton = ({
    tabName,
    icon,
    label,
  }: {
    tabName: string;
    icon: JSX.Element;
    label: string;
  }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
        activeTab === tabName
          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
          : "text-gray-600 hover:bg-white/50"
      }`}
    >
      {icon}
      <span className="font-semibold">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.blue.500)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.cyan.500)_0%,_transparent_50%)]" />
      </div>

      <AdminNavbar />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Dasbor
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          <TabButton
            tabName="articles"
            icon={<FaNewspaper />}
            label="Artikel"
          />
          <TabButton tabName="gallery" icon={<FaImages />} label="Galeri" />
          <TabButton
            tabName="alumni"
            icon={<FaUserGraduate />}
            label="Alumni"
          />
          <TabButton // Tambahkan tombol tab baru
            tabName="carousel"
            icon={<FaPhotoVideo />}
            label="Carousel"
          />
        </nav>

        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
}