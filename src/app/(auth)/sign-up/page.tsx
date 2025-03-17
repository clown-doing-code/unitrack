import { SignUpForm } from "@/components/form/sign-up-form";
import { GridBackground } from "@/components/grid-background";

export default function SignUpPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-4">
      <div className="fixed inset-0 z-0 h-full w-full">
        <GridBackground />
      </div>
      <div className="relative z-10 flex w-full max-w-lg flex-col gap-6">
        <SignUpForm />
      </div>
    </div>
  );
}
