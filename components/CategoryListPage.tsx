import React from 'react';
import { Category, CategoryDisplayNames } from '../types';
import { ChevronRight, Grid } from 'lucide-react';

interface CategoryListPageProps {
  navigate: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CategoryListPage: React.FC<CategoryListPageProps> = ({ navigate }) => {
  document.title = "All Categories – SarkariJobsForYou";

  const categories = Object.entries(CategoryDisplayNames).map(([key, name]) => ({
    slug: key as Category,
    name
  }));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="flex items-center text-sm text-gray-500 mb-8 font-medium">
        <a href="/" onClick={navigate} className="hover:text-indigo-600">Home</a>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-900">All Categories</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-indigo-900 px-8 py-10 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Grid className="text-indigo-300" size={24} />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">All Categories</h1>
          </div>
          <p className="text-indigo-100 opacity-80 font-medium">
            Browse all Sarkari Jobs categories including Latest Jobs, Results, Admit Card, Banking, Railway and more.
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={navigate}
                className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border-2 border-transparent hover:border-indigo-600 hover:bg-white hover:shadow-md transition-all group"
              >
                <span className="font-bold text-gray-800 text-lg group-hover:text-indigo-700">
                  {cat.name}
                </span>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};