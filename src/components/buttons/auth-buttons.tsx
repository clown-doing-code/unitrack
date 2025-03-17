"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import SignoutButton from "./signout-buttons.";
import { User } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export default function AuthButtons() {
  const { data, isPending } = authClient.useSession();
  const session = data;

  if (isPending)
    return (
      <div className="flex justify-center gap-4">
        <Skeleton className="h-9 w-20 animate-pulse rounded-md bg-muted" />
        <Skeleton className="h-9 w-20 animate-pulse rounded-md bg-muted" />
      </div>
    );

  return !session ? (
    <div className="flex items-center justify-center gap-4">
      <Link href="/sign-in">
        <Button size="sm" className="flex items-center gap-1">
          Ingresar
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button size="sm" className="flex items-center gap-1">
          Registrarse
        </Button>
      </Link>
    </div>
  ) : (
    <div className="flex items-center justify-center gap-4">
      <Button asChild size="sm">
        <Link href="/dashboard">
          <User className="mr-2 h-4 w-4" />
          Dashboard
        </Link>
      </Button>
      <SignoutButton />
    </div>
  );
}
