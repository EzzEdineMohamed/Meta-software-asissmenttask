import { CircleAlert } from "lucide-react";

{  /* product not found slide */ }
export default function NotFoundSlide() {
  return (
    <div className="container flex gap-3 items-center justify-center py-10 text-center text-slate-600">
      <CircleAlert className="w-10 h-10 text-red-500 mb-2" />
      <p className="text-lg font-medium">
        Sorry, this product is not available right now
      </p>
    </div>
  );
}
