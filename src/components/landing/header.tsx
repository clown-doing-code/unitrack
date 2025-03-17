import type React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ThemeToggle } from "../buttons/theme-toggle";
import AuthButtons from "../buttons/auth-buttons";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-border border-border/80 px-6 py-2 backdrop-blur dark:border-white dark:border-white/80 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60 md:px-10">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center text-lg font-semibold">
            <GraduationCap className="mr-1.5 h-8 w-8 text-primary" />
            <span>UniTrack</span>
          </Link>
        </div>

        {/* Navegación centrada */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Funciones
          </a>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Nosotros
          </a>

          <a
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Testimonios
          </a>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Precios
          </a>
        </nav>

        {/* Controles a la derecha */}
        <div className="flex items-center gap-4">
          <AuthButtons />

          {/* Divisor mejorado */}
          <div className="mx-1 h-8 w-px bg-border/80" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
