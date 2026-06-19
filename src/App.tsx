import axios from "axios";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "./types/Product";
import ProductCard from "./components/ProductCard";
import SearchInput from "./components/SearchInput";
import NotFoundSlide from "./components/NotFoundSlide";
import SortSelect from "./components/SortSelect";
import LoadingSpinner from "./components/LoadingState";
import CategorySelector from "./components/CategorySelector";
import Navbar from "./components/Navbar";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const productCategories = [
    "",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

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

  const filteredProducts = useMemo(() => {
    let result = products
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      )
      .filter((product) =>
        selectedCategory === "" ? true : product.category === selectedCategory,
      );

    switch (sortBy) {
      case "low-high":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }

    return result;
  }, [products, search, selectedCategory, sortBy]);

  return (
    <div className="min-h-dvh bg-slate-50">
      <Navbar isLoading={isLoading} filteredProducts={filteredProducts} />

      <div className="border-b border-slate-200/70 bg-white px-4 py-4 md:px-6">
        <div className="container flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="w-full md:flex-1">
              <SearchInput setSearch={setSearch} />
            </div>
            <SortSelect setSortBy={setSortBy} />
          </div>

          <div className="flex flex-wrap gap-2">
            {productCategories.map((cat) => (
              <CategorySelector
                key={cat}
                cat={cat}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </div>
        </div>
      </div>


      {
      filteredProducts.length > 0 && (
        <div className="container">
          <p className="py-3 text-xs text-slate-400">
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>
      )
      }

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
        <NotFoundSlide />
      ) : (
        <div className="container grid gap-5 px-4 pb-10 md:px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}