import type { Product } from "../types/Product";

type NavbarComponentProps = {
  isLoading: boolean;
  filteredProducts: Product[];
};

export default function Navbar({filteredProducts,isLoading}: NavbarComponentProps) {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/70 bg-white/80 px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-indigo-600" />
        <span className="text-base font-medium text-slate-800">Meta Store</span>
      </div>
      <span className="text-sm text-slate-400">
        {/* loading state happen in mounting phose of component , and after this loading state appear number od products in array of product list */}
        {isLoading ? "Loading..." : `${filteredProducts.length} products`}
      </span>
    </nav>
  );
}
