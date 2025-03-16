"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, LogOut, GraduationCap } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { useCallback } from "react";

export default function Header() {
  const isLoading = false;
  const isAuthenticated = false;

  // Function to handle smooth scrolling
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault(); // Prevent default link behavior

      const section = document.getElementById(sectionId);
      if (section) {
        // Smooth scroll to the section
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [],
  );

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
            onClick={(e) => scrollToSection(e, "features")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Funciones
          </a>
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "nosotros")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Nosotros
          </a>

          <a
            href="#"
            onClick={(e) => scrollToSection(e, "testimonios")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Testimonios
          </a>
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "pricing")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
          >
            Precios
          </a>
        </nav>

        {/* Controles a la derecha */}
        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="h-9 w-20 animate-pulse rounded-md bg-muted"></div>
          ) : isAuthenticated ? (
            <>
              <Button asChild size="sm">
                <Link href="/dashboard">
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button
                variant="neutral"
                size="sm"
                className="flex items-center gap-1"
              >
                <LogOut className="h-4 w-4" />
                <span>Cerrar sesión</span>
              </Button>
            </>
          ) : (
            <>
              <Button asChild size="sm">
                <Link href="/auth/sign-in">Ingresar</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/auth/sign-up">Registrarse</Link>
              </Button>
            </>
          )}

          {/* Divisor mejorado */}
          <div className="mx-1 h-8 w-px bg-border/80"></div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
