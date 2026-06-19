import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import type { Product } from "./types/Product";
import ProductCard from "./components/ProductCard";
import SearchInput from "./components/SearchInput";
import LoadingSpinner from "./components/LoadingState";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  async function getProducts() {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-dvh bg-slate-50">
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/70 bg-white/80 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-600" />
          <span className="text-base font-medium text-slate-800">
            Meta Store
          </span>
        </div>
        <span className="text-sm text-slate-400">
          {isLoading ? "Loading..." : `${filteredProducts.length} products`}
        </span>
      </nav>

      <div className="border-b border-slate-200/70 bg-white px-4 py-4 md:px-6">
        <div className="container">
          <SearchInput setSearch={setSearch} />
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="flex h-64 items-center justify-center gap-2 text-red-500">
          <span className="text-lg">{error}</span>
          <button
            onClick={getProducts}
            className="text-sm text-indigo-600 underline underline-offset-2"
          >
            Try again
          </button>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-slate-400">
          No results found
        </div>
      ) : (
        <div className="container grid gap-5 px-4 pb-10 pt-4 md:px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}