"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { FaUserGraduate } from 'react-icons/fa';

interface Alumni {
  id: number;
  name: string;
  graduation_year: number;
  batch_year: string;
}

const AlumniSkeleton = () => (
    <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
        <div className="h-5 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    </div>
);

export default function AlumniMTSPage() {
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumni = async () => {
      setLoading(true);
      const { data } = await supabase
        .from('alumni')
        .select('*')
        .eq('school', 'MTS')
        .order('graduation_year', { ascending: false });
      if (data) setAlumni(data);
      setLoading(false);
    };
    fetchAlumni();
  }, []);

  return (
    <>
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Alumni MTs YATI
          </h1>
          <p className="text-gray-600 mt-2">Jejak para lulusan Madrasah Tsanawiyah.</p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    Array.from({ length: 9 }).map((_, index) => <AlumniSkeleton key={index} />)
                ) : (
                    alumni.map((member) => (
                        <div key={member.id} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 transform hover:bg-emerald-50 transition-colors">
                            <FaUserGraduate className="text-2xl text-emerald-500"/>
                            <div>
                                <h3 className="font-bold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-600">Lulusan {member.graduation_year} - Angkatan {member.batch_year}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}