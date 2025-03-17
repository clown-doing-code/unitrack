"use client";

import { useRouter } from "next/navigation";
import LoadingButton from "@/components/buttons/loading-btn";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { CirclePower } from "lucide-react";

export default function SignoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    try {
      setPending(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/sign-in");
            router.refresh();
          },
        },
      });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <LoadingButton
      className="bg-red-400"
      pending={pending}
      onClick={handleSignOut}
    >
      Salir
      <CirclePower className="h-8 w-8" />
    </LoadingButton>
  );
}
