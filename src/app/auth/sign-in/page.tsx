import { SignInForm } from "@/components/form/sign-in-form";
import { GridBackground } from "@/components/grid-background";
import { GraduationCap } from "lucide-react";
import React from "react";

type Props = {};

export default function SignInPage({}: Props) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="fixed inset-0 z-0 h-full w-full">
        <GridBackground />
      </div>
      <div className="relative z-10 flex w-full max-w-lg flex-col gap-6">
        <SignInForm />
      </div>
    </div>
  );
}
