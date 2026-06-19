type CategorySelectorProps = {
  cat: string;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
};

export default function CategorySelector({
  cat,
  selectedCategory,
  setSelectedCategory,
}: CategorySelectorProps) {
  return (
    <button
      onClick={() => setSelectedCategory(cat)}
      className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all duration-200
        ${
          selectedCategory === cat
            ? "bg-indigo-600 text-white shadow-sm"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
        }`}
    >
      {cat === "" ? "All" : cat}
    </button>
  );
}
