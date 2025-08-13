"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { FaTrash } from 'react-icons/fa';

// Definisikan tipe data untuk Alumni
interface Alumni {
  id: number;
  name: string;
  graduation_year: number;
  batch_year: string;
  school: 'MTS' | 'MA';
}

export default function AlumniManager() {
  // State untuk form input
  const [name, setName]               = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [batchYear, setBatchYear]         = useState('');
  const [school, setSchool]           = useState<'MTS' | 'MA'>('MTS');
  
  // State untuk data dan UI
  const [alumniList, setAlumniList]     = useState<Alumni[]>([]);
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [message, setMessage]           = useState({ type: '', text: '' });

  // Mengambil data alumni saat komponen dimuat
  useEffect(() => {
    fetchAlumni();
  }, []);

  // Fungsi untuk mengambil semua data alumni dari Supabase
  const fetchAlumni = async () => {
    const { data, error } = await supabase.from('alumni').select('*').order('graduation_year', { ascending: false });
    if (data) {
        setAlumniList(data);
    } else if (error) {
        setMessage({ type: 'error', text: 'Gagal memuat data alumni.' });
    }
  };

  // Handler untuk submit form (menambah alumni baru)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !graduationYear || !batchYear) {
        setMessage({ type: 'error', text: 'Semua kolom harus diisi.' });
        return;
    }
    setIsSubmitting(true);
    
    const { error } = await supabase.from('alumni').insert([{ 
      name, 
      graduation_year: parseInt(graduationYear), 
      batch_year: batchYear,
      school
    }]);

    if (error) {
      setMessage({ type: 'error', text: 'Gagal menambah alumni: ' + error.message });
    } else {
      setMessage({ type: 'success', text: 'Alumni berhasil ditambahkan.' });
      // Reset form
      setName('');
      setGraduationYear('');
      setBatchYear('');
      fetchAlumni(); // Muat ulang daftar
    }
    setIsSubmitting(false);
  };

  // Handler untuk menghapus data alumni
  const handleDelete = async (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data alumni ini?")) {
      const { error } = await supabase.from('alumni').delete().eq('id', id);
      if(error) {
        setMessage({ type: 'error', text: 'Gagal menghapus alumni: ' + error.message });
      } else {
        setMessage({ type: 'success', text: 'Data alumni berhasil dihapus.' });
        fetchAlumni(); // Muat ulang daftar
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Tambah Alumni
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        {message.text && (
          <div className={`mb-6 p-4 rounded-xl ${
            message.type === 'error' 
              ? 'bg-red-50 text-red-600' 
              : 'bg-green-50 text-green-600'
          } font-semibold text-center`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Nama Lengkap Alumni" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
              required 
            />
            
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="number" 
                placeholder="Tahun Lulus" 
                value={graduationYear} 
                onChange={e => setGraduationYear(e.target.value)} 
                className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
                required 
              />
              <input 
                type="text" 
                placeholder="Angkatan" 
                value={batchYear} 
                onChange={e => setBatchYear(e.target.value)} 
                className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
                required 
              />
            </div>

            <select 
              value={school} 
              onChange={(e) => setSchool(e.target.value as 'MTS' | 'MA')} 
              className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
            >
              <option value="MTS">MTS</option>
              <option value="MA">MA</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl disabled:opacity-50 font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
          >
            {isSubmitting ? 'Menyimpan...' : 'Tambah Alumni'}
          </button>
        </form>
      </div>

      {/* Alumni List Section */}
      <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-cyan-100/60">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Daftar Alumni
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-h-[600px] overflow-y-auto space-y-4 pr-4">
          {alumniList.length > 0 ? alumniList.map(alumni => (
            <div 
              key={alumni.id} 
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-blue-100/60 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{alumni.name}</h4>
                  <p className="text-sm text-gray-600">
                    Lulus {alumni.graduation_year} • Angkatan {alumni.batch_year}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    alumni.school === 'MTS' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {alumni.school}
                  </span>
                  <button 
                    onClick={() => handleDelete(alumni.id)} 
                    className="text-red-500 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-full"
                    title="Hapus Alumni"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-12 text-gray-500">
              Belum ada data alumni.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}