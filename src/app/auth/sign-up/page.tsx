import { SignUpForm } from "@/components/form/sign-up-form";
import { GridBackground } from "@/components/grid-background";
import { GraduationCap } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-4">
      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>
      <div className="relative z-10 flex w-full max-w-md flex-col gap-6">
        <a
          href="/"
          className="flex items-center gap-2 self-center text-lg font-semibold"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md text-black dark:text-white">
            <GraduationCap />
          </div>
          UniTrack
        </a>
        <SignUpForm />
      </div>
    </div>
  );
}
