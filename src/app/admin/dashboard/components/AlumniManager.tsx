"use client";

import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { FaTrash, FaPen } from 'react-icons/fa';

// Definisikan tipe data untuk Alumni
interface Alumni {
  id: number;
  name: string;
  graduation_year: number;
  batch_year: string;
  school: 'MTS' | 'MA';
}

export default function AlumniManager() {
  // Get current year for default value
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 2000 + 1 }, 
    (_, i) => 2000 + i
  );

  // Modified state for form input
  const [name, setName] = useState('');
  const [graduationYear, setGraduationYear] = useState(currentYear.toString());
  const [batchStart, setBatchStart] = useState('');
  const [batchEnd, setBatchEnd] = useState('');
  const [school, setSchool] = useState<'MTS' | 'MA'>('MTS');
  
  // State untuk data dan UI
  const [alumniList, setAlumniList]     = useState<Alumni[]>([]);
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [message, setMessage]           = useState({ type: '', text: '' });
  const [editingAlumni, setEditingAlumni] = useState<Alumni | null>(null);

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
    if (!name || !graduationYear || !batchStart || !batchEnd) {
      setMessage({ type: 'error', text: 'Semua kolom harus diisi.' });
      return;
    }
    setIsSubmitting(true);
    
    const batchYear = `${batchStart}-${batchEnd}`;
    const alumniData = {
      name,
      graduation_year: parseInt(graduationYear),
      batch_year: batchYear,
      school
    };

    let error;

    if (editingAlumni) {
      // Update existing alumni
      const { error: updateError } = await supabase
        .from('alumni')
        .update(alumniData)
        .eq('id', editingAlumni.id);
      error = updateError;
    } else {
      // Create new alumni
      const { error: insertError } = await supabase
        .from('alumni')
        .insert([alumniData]);
      error = insertError;
    }

    if (error) {
      setMessage({ 
        type: 'error', 
        text: `Gagal ${editingAlumni ? 'memperbarui' : 'menambah'} alumni: ${error.message}` 
      });
    } else {
      setMessage({ 
        type: 'success', 
        text: `Alumni berhasil ${editingAlumni ? 'diperbarui' : 'ditambahkan'}.` 
      });
      resetForm();
      fetchAlumni();
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

  // Fungsi untuk mengatur mode edit
  const handleEdit = (alumni: Alumni) => {
    setEditingAlumni(alumni);
    setName(alumni.name);
    setGraduationYear(alumni.graduation_year.toString());
    // Split batch year into start and end years
    const [start, end] = alumni.batch_year.split('-');
    setBatchStart(start);
    setBatchEnd(end);
    setSchool(alumni.school);
  };

  // Reset form
  const resetForm = () => {
    setEditingAlumni(null);
    setName('');
    setGraduationYear('');
    setBatchStart('');
    setBatchEnd('');
    setSchool('MTS');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-white/70 backdrop-blur-lg p-8 rounded-[2.5rem] shadow-2xl border-2 border-blue-100/60">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {editingAlumni ? 'Edit Alumni' : 'Tambah Alumni'}
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
            
            <select 
              value={graduationYear}
              onChange={e => setGraduationYear(e.target.value)}
              className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
              required
            >
              <option value="">Pilih Tahun Lulus</option>
              {yearOptions.map(year => (
                <option key={`grad-${year}`} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <div className="grid grid-cols-2 gap-4">
              <select 
                value={batchStart}
                onChange={e => setBatchStart(e.target.value)}
                className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
                required
              >
                <option value="">Tahun Masuk</option>
                {yearOptions.map(year => (
                  <option key={`start-${year}`} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select 
                value={batchEnd}
                onChange={e => setBatchEnd(e.target.value)}
                className="w-full p-4 bg-white/80 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-400 transition-all"
                required
              >
                <option value="">Tahun Selesai</option>
                {yearOptions.map(year => (
                  <option key={`end-${year}`} value={year}>
                    {year}
                  </option>
                ))}
              </select>
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

          <div className="flex gap-4">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl disabled:opacity-50 font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isSubmitting 
                ? 'Menyimpan...' 
                : (editingAlumni ? 'Perbarui Alumni' : 'Tambah Alumni')
              }
            </button>

            {editingAlumni && (
              <button 
                type="button" 
                onClick={resetForm}
                className="flex-1 bg-gray-500 text-white p-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Batal
              </button>
            )}
          </div>
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
                    onClick={() => handleEdit(alumni)} 
                    className="text-yellow-500 hover:text-yellow-600 transition-colors p-2 hover:bg-yellow-50 rounded-full"
                    title="Edit Alumni"
                  >
                    <FaPen />
                  </button>
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