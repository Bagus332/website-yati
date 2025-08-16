// components/AdminNavbar.tsx

"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

export default function AdminNavbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    }
    router.push("/admin");
  };

  return (
    <nav className="w-full bg-white/70 backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Dashboard Admin
        </h2>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-4 py-2 rounded-full text-white bg-red-500 hover:bg-red-600 transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}
