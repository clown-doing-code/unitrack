import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface LoadingButtonProps extends ButtonProps {
  className?: string;
  pending: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
}

export default function LoadingButton({
  pending,
  children,
  className,
  onClick,
  variant,
}: LoadingButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn("w-full items-center gap-2", className)}
      type="submit"
      disabled={pending}
      size="sm"
      variant={variant}
    >
      {pending ? (
        <div className="flex items-center justify-center italic">
          <Loader className="mr-2 h-5 w-5 animate-spin" />
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
