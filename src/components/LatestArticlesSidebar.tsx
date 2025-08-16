    import { supabase } from "@/lib/supabase";
    import Link from "next/link";
    import Image from "next/image";

    interface Article {
    id: number;
    created_at: string;
    title: string;
    image_url: string | null;
    slug: string;
    content: string; // Tambahkan kolom konten
    }

    // Fungsi untuk mengambil 6 artikel terbaru dari Supabase
    // Sekarang kita juga mengambil kontennya
    async function getLatestArticles(): Promise<Article[]> {
    const { data, error } = await supabase
        .from("articles")
        .select("id, title, created_at, image_url, slug, content") // Perbarui query
        .order("created_at", { ascending: false })
        .limit(6);

    if (error) {
        console.error("Error fetching latest articles:", error.message);
        return [];
    }
    return data;
    }

    // Fungsi helper untuk memotong teks
    const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
    };

    export default async function LatestArticlesSidebar() {
    const articles = await getLatestArticles();

    if (articles.length === 0) {
        return (
        <p className="text-center text-gray-500 text-xs">Tidak ada berita.</p>
        );
    }

    return (
        <aside className="bg-white p-3 rounded-md shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-blue-500 pb-1">
            Berita Terkini
        </h3>
        <div className="space-y-3">
            {articles.map((article) => (
            <div key={article.id} className="flex items-start gap-2">
                {article.image_url && (
                <div className="flex-shrink-0 w-16 h-12 rounded-sm overflow-hidden relative">
                    <Image
                    src={article.image_url}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
                )}
                <div className="flex-grow">
                <Link href={`/berita/${article.slug}`}>
                    <h4 className="text-xs font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    {article.title}
                    </h4>
                </Link>
                {/* Tambahkan cuplikan konten */}
                <p className="text-xs text-gray-600 mt-1 leading-tight">
                    {truncateText(article.content, 12)}
                </p>
                <span className="text-[10px] text-gray-500 block mt-1">
                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    })}
                </span>
                </div>
            </div>
            ))}
        </div>
        <div className="mt-3 text-center">
            <Link
            href="/berita"
            className="text-blue-600 text-xs font-semibold hover:underline"
            >
            Lihat Semua &rarr;
            </Link>
        </div>
        </aside>
    );
    }
