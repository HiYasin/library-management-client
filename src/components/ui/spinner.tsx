import { Loader2Icon } from "lucide-react";

interface SpinnerProps {
  size?: number;
}

export default function Spinner({ size = 24 }: SpinnerProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      <Loader2Icon className="animate-spin text-primary" width={size} height={size} />
    </div>
  );
}