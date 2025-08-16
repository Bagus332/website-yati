// middleware.ts

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Periksa apakah ada sesi pengguna dari Supabase
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Jika tidak ada sesi, dan pengguna mencoba mengakses halaman dashboard,
  // arahkan mereka kembali ke halaman login.
  if (!session && req.nextUrl.pathname.startsWith("/admin/dashboard")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return res;
}

// Tentukan path mana yang akan dilindungi oleh middleware ini
export const config = {
  matcher: "/admin/dashboard/:path*",
};
