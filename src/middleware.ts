import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

type Session = typeof auth.$Infer.Session;

const authRoutes = ["/sign-in", "/sign-up"];
const passwordRoutes = ["/reset-password", "/forgot-password"];
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isPasswordRoute = passwordRoutes.includes(pathName);
  const isProtectedRoute = protectedRoutes.some(route => 
    pathName === route || pathName.startsWith(`${route}/`)
  );
  const isHomePage = pathName === "/";

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "", // Forward the cookies from the request
      },
    },
  );

  // Si el usuario está autenticado y trata de acceder a rutas de autenticación o contraseña,
  // redirigir a la página principal
  if (session && (isAuthRoute || isPasswordRoute)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Si el usuario no está autenticado y trata de acceder a rutas protegidas,
  // redirigir a la página de inicio de sesión
  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Permitir acceso a la página de inicio a todos los usuarios
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
};
