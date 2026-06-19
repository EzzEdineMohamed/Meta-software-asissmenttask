import { Search } from "lucide-react";

type SearchInputProps = {
  setSearch: (value: string) => void;
};

export default function SearchInput({ setSearch }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <input
        className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-4 pr-10 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}