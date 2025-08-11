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
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-4 text-[#071952]">Kelola Alumni</h3>
      {message.text && <p className={`mb-4 text-sm font-semibold ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{message.text}</p>}
      
      {/* Form Input Alumni */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="text" placeholder="Nama Lengkap Alumni" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3572EF] md:col-span-2" required />
            <input type="number" placeholder="Tahun Lulus" value={graduationYear} onChange={e => setGraduationYear(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3572EF]" required />
            <input type="text" placeholder="Angkatan" value={batchYear} onChange={e => setBatchYear(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3572EF]" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <select value={school} onChange={(e) => setSchool(e.target.value as 'MTS' | 'MA')} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3572EF] md:col-span-3">
                <option value="MTS">MTS</option>
                <option value="MA">MA</option>
            </select>
            <button type="submit" disabled={isSubmitting} className="w-full bg-[#3572EF] text-white p-3 rounded-lg disabled:bg-opacity-50 font-bold hover:bg-opacity-90 transition-colors">
            {isSubmitting ? 'Menyimpan...' : 'Tambah Alumni'}
            </button>
        </div>
      </form>

      {/* Daftar Alumni */}
      <div className="mt-6 max-h-80 overflow-y-auto p-2 bg-[#E0F7FA]/50 rounded-lg border border-[#97FEED]">
        {alumniList.length > 0 ? alumniList.map(alumni => (
          <div key={alumni.id} className="flex justify-between items-center p-3 border-b border-[#97FEED] last:border-b-0 hover:bg-white/50">
            <div>
              <p className="font-semibold text-gray-800">{alumni.name}</p>
              <p className="text-sm text-gray-500">
                Lulus {alumni.graduation_year} - Angkatan {alumni.batch_year}
                <span className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full ${alumni.school === 'MTS' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'}`}>
                    {alumni.school}
                </span>
              </p>
            </div>
            <button onClick={() => handleDelete(alumni.id)} title="Hapus Alumni"><FaTrash className="text-red-500 hover:text-red-600 transition-colors" /></button>
          </div>
        )) : <p className="text-center text-gray-500 p-4">Belum ada data alumni.</p>}
      </div>
    </div>
  );
}