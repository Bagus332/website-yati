import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Tag } from 'lucide-react';
import Image from "next/image";

// Define the structure of an article for type safety
interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image_url: string | null;
  slug: string;
}

// Updated function to fetch a single article by its slug
async function getArticle(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching article:", error.message);
    return null;
  }
  return data;
}

// This is an async Server Component
export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  // A more user-friendly message if the article isn't found
  if (!article) {
    return (
      <>
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Artikel Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-8">Maaf, kami tidak dapat menemukan artikel yang Anda cari.</p>
            <a href="/berita" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              Kembali ke Daftar Berita
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-blue-50 to-white font-sans py-12 px-4">
        <article className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl border border-gray-100">
          {/* Article Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>
                Dipublikasikan pada {new Date(article.created_at).toLocaleDateString("id-ID", {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </span>
            </div>
          </div>

          {/* Article Image */}
          {article.image_url && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={article.image_url}
                alt={article.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg lg:prose-xl max-w-none prose-p:text-gray-700 prose-headings:text-gray-800 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}