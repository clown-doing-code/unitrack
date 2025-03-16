import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import { Loader } from "lucide-react";
export default function LoadingButton({
  pending,
  children,
  onClick,
}: {
  pending: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className="w-full"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <Loader className="mr-2 h-5 w-5 animate-spin" />
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
