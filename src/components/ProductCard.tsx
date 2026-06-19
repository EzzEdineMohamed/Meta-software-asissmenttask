import type { Product } from "../types/Product";

type ProductPageProps = {
    product : Product;
}

export default function ProductCard( { product } : ProductPageProps ) {
  return (
    <div
      key={product.id}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300"
    >
<div className="h-52 w-full flex items-center justify-center bg-slate-50/80 p-4">        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
          {product.category}
        </span>

        <p className="line-clamp-2 text-[15px] font-medium leading-snug text-slate-800">
          {product.title}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-indigo-700">
            ${product.price}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <span className="text-indigo-500">★</span>
            {product.rating.rate}
            <span className="text-slate-400">({product.rating.count})</span>
          </span>
        </div>
      </div>
    </div>
  );
}
