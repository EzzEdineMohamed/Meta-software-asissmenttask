# 🛍️ Product Listing App

A responsive React + TypeScript product listing application that fetches data from [FakeStore API](https://fakestoreapi.com/products) and supports real-time search, category filtering, and sorting.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/EzzEdineMohamed/Meta-software-asissmenttask.git

# 2. Navigate to the project folder
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tools & Libraries

| Tool | Purpose |
|------|---------|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling & responsiveness |
| **Axios** | HTTP requests / data fetching |
| **Lucide React** | Icons |
| **useMemo** | Performance optimization |

---

## ✨ Features

- 🔍 **Real-time search** — filters products by name as you type
- 🗂️ **Category filtering** — tab-based filter for product categories
- ↕️ **Sorting** — sort by price (low → high / high → low) or rating
- ⏳ **Loading state** — spinner shown while data is being fetched
- ❌ **Error handling** — error message with a "Try Again" button
- 🔎 **Empty state** — "No results found" UI when search has no matches
- 📱 **Fully responsive** — works on mobile, tablet, and desktop

---

## ⚡ Performance

Search, filter, and sort logic are all handled inside a single `useMemo` hook. This means the computation only runs when the relevant state changes (`products`, `search`, `selectedCategory`, `sortBy`) — not on every re-render.

```ts
const filteredProducts = useMemo(() => {
  // filter by search → filter by category → sort
}, [products, search, selectedCategory, sortBy]);
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── SearchInput.tsx
│   ├── SortSelect.tsx
│   ├── CategorySelector.tsx
│   ├── ProductCard.tsx
│   ├── LoadingSpinner.tsx
│   └── NotFoundSlide.tsx
├── types/
│   └── product.ts
├── App.tsx
└── main.tsx
├── App.css
└── main.css
```

---

## 🧩 Challenges & Solutions

### Challenge 1 — Avoiding unnecessary re-renders
**Problem:** Running filter + sort logic on every render would be inefficient with 20+ products.  
**Solution:** Wrapped the entire logic in `useMemo` so it only recomputes when the actual dependencies change.

### Challenge 2 — Combining search + category filter together
**Problem:** Search and category filter needed to work simultaneously without one overriding the other.  
**Solution:** Chained two `.filter()` calls on the same array — search first, then category — before applying sort.

---

## 🌐 Live Demo

[View Live Demo](https://meta-software-asissmenttask.vercel.app/)

---

## 📄 License

MIT
