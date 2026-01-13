import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Categories – SarkariJobsForYou',
  description: 'Browse all Sarkari Jobs categories including Latest Jobs, Results, Admit Card, Banking, Railway and more.',
};

export default function CategoryPage() {
  const categories = [
    { name: 'Latest Jobs', href: '/category/latest-jobs/' },
    { name: 'Admit Card', href: '/category/admit-card/' },
    { name: 'Results', href: '/category/results/' },
    { name: 'Admission', href: '/category/admission/' },
    { name: 'Answer Key', href: '/category/answer-key/' },
    { name: 'Syllabus', href: '/category/syllabus/' },
    { name: 'Bihar Board Specials', href: '/category/bihar-board-specials/' },
    { name: 'Featured Educational Updates', href: '/category/featured-educational-updates/' },
    { name: 'SSC Careers', href: '/category/ssc-careers/' },
    { name: 'UPSC Notifications', href: '/category/upsc-notifications/' },
    { name: 'Railway (RRB/RRC)', href: '/category/railway/' },
    { name: 'Banking Jobs (IBPS, SBI)', href: '/category/banking-jobs/' },
    { name: 'State Police Recruitment', href: '/category/state-police-recruitment/' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-900 border-b-2 border-indigo-100 pb-2">
        All Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.href} 
            href={category.href}
            className="p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all font-semibold text-gray-800"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
