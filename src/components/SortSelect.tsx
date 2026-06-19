type SortingProductsComponentProps = {
  setSortBy: (value: string) => void;
};

export default function SortSelect({ setSortBy }: SortingProductsComponentProps) {
  return (
    <select
      onChange={(e) => setSortBy(e.target.value)}
      className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all cursor-pointer"
    >
      <option value="">Default</option>
      <option value="low-high">Price: Low → High</option>
      <option value="high-low">Price: High → Low</option>
      <option value="rating">Rating</option>
    </select>
  );
}