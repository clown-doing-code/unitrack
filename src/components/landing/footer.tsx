import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full border-t py-8 md:py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} UniTrack Studio. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Políticas de Privacidad
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link
            href="/terms-conditions"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
