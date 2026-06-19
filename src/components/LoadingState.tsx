import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="container min-h-dvh flex justify-center items-center">
      <LoaderCircle className="h-8 w-8 animate-spin text-indigo-600" />
    </div>
  );
}
