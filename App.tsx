
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { JobSection } from './components/JobSection';
import { CareerBot } from './components/CareerBot';
import { MOCK_POSTS } from './constants';
import { Category, CategoryDisplayNames } from './types';
import { ShieldCheck, CheckCircle, Book, TrendingUp, Calendar, Zap, MessageSquare, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCategoryPage = (slug: string) => {
    const categoryKey = Object.values(Category).find(val => val === slug) as Category;
    const displayName = categoryKey ? CategoryDisplayNames[categoryKey] : slug;
    const posts = MOCK_POSTS.filter(p => p.category === categoryKey);

    // Update Meta Title dynamically
    document.title = `${displayName} – SarkariJobsForYou`;

    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-6 font-medium">
          <a href="#/" className="hover:text-indigo-600">Home</a>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-gray-900">{displayName}</span>
        </nav>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-indigo-900 px-6 py-8 text-white">
            <h1 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tight">{displayName}</h1>
            <p className="text-indigo-100 opacity-80 font-medium">
              Latest {displayName} updates, notifications, and direct links for government exams.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <a href={`#/post/${post.id}`} className="text-xl font-bold text-blue-800 hover:text-indigo-700 leading-tight block mb-2">
                        {post.title}
                      </a>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                        <span className="flex items-center gap-1">📅 {post.postDate}</span>
                        <span className="flex items-center gap-1 text-indigo-600">📍 {post.organization}</span>
                      </div>
                    </div>
                    <a 
                      href={`#/post/${post.id}`}
                      className="inline-flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-lg font-black text-sm hover:bg-indigo-700 transition-colors shrink-0"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-20 text-center text-gray-400 font-bold text-xl italic">
                No articles published in this category yet.
              </div>
            )}
          </div>
        </div>

        {/* SEO Content for Category */}
        <div className="mt-12 bg-white p-8 rounded-xl border border-gray-200 prose prose-indigo max-w-none">
          <h2 className="text-2xl font-black text-gray-900 mb-4">About {displayName}</h2>
          <p className="text-gray-700 leading-relaxed font-medium">
            Stay updated with the latest {displayName} through SarkariJobsForYou. We provide real-time alerts, 
            application dates, and official notification PDFs for all major government departments. 
            Make sure to check this page daily to never miss an update regarding {displayName}.
          </p>
        </div>
      </main>
    );
  };

  const renderHome = () => {
    document.title = "Sarkari Jobs For You | Latest Govt Jobs, Results, Admit Card";
    return (
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
        <div className="bg-white border-y-2 border-red-500 py-3 mb-8 overflow-hidden marquee-container flex items-center shadow-md rounded-lg">
          <div className="bg-red-600 text-white text-[12px] font-black px-4 py-1.5 rounded-r mr-4 z-10 whitespace-nowrap shadow-sm">NEWS UPDATE</div>
          <div className="marquee-content flex gap-16 text-[16px] font-black text-red-800">
            <span>🔥 Railway RPF Online Form 2024 - Apply Link Active for 4660 Posts.</span>
            <span>📢 SSC GD Constable 2024 Final Result Declared - Direct Link Available.</span>
            <span>✅ Bihar Board Inter Compartmental Result 2024 Out.</span>
            <span>🚀 UP Police Constable Exam City Slip releasing soon. Stay Tuned.</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Latest Jobs', slug: Category.LATEST_JOB, icon: <TrendingUp size={22} className="text-blue-600" />, color: 'border-blue-200 bg-blue-50' },
            { label: 'Admit Cards', slug: Category.ADMIT_CARD, icon: <Calendar size={22} className="text-emerald-600" />, color: 'border-emerald-200 bg-emerald-50' },
            { label: 'Results', slug: Category.RESULT, icon: <Zap size={22} className="text-rose-600" />, color: 'border-rose-200 bg-rose-50' },
            { label: 'Syllabus', slug: Category.SYLLABUS, icon: <MessageSquare size={22} className="text-amber-600" />, color: 'border-amber-200 bg-amber-50' },
          ].map((item, i) => (
            <a key={i} href={`#/category/${item.slug}`} className={`${item.color} border-2 p-4 rounded-xl flex items-center justify-center gap-4 hover:shadow-lg transition-all group shadow-sm`}>
              <div className="bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform">{item.icon}</div>
              <span className="text-[15px] md:text-[17px] font-black text-gray-800 tracking-tight">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JobSection title="Latest Jobs" category={Category.LATEST_JOB} posts={MOCK_POSTS} color="bg-blue-800" />
          <JobSection title="Admit Card" category={Category.ADMIT_CARD} posts={MOCK_POSTS} color="bg-emerald-800" />
          <JobSection title="Results" category={Category.RESULT} posts={MOCK_POSTS} color="bg-red-800" />
          <JobSection title="Admission" category={Category.ADMISSION} posts={MOCK_POSTS} color="bg-purple-800" />
          <JobSection title="Answer Key" category={Category.ANSWER_KEY} posts={MOCK_POSTS} color="bg-orange-800" />
          <JobSection title="Syllabus" category={Category.SYLLABUS} posts={MOCK_POSTS} color="bg-cyan-800" />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-md">
              <div className="bg-gray-800 text-white px-5 py-3 font-black text-[16px]">Featured Education Updates</div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_POSTS.slice(0, 4).map(post => (
                  <a key={post.id} href={`#/post/${post.id}`} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all shadow-sm">
                    <div className="w-14 h-14 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0 border border-indigo-100">
                      <span className="text-2xl font-black text-indigo-400">{post.organization[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-[15px] md:text-[16px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-700">{post.title}</h4>
                      <span className="text-[12px] text-gray-500 font-bold uppercase">{post.organization} • {post.postDate}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white border-2 border-orange-100 rounded-lg overflow-hidden shadow-md">
              <div className="bg-orange-600 text-white px-5 py-3 font-black text-[16px]">Bihar Board Specials</div>
              <div className="p-3 space-y-2">
                {MOCK_POSTS.filter(p => p.category === Category.BIHAR_SPECIAL).map(p => (
                  <a key={p.id} href={`#/post/${p.id}`} className="block text-[14px] font-bold text-blue-800 p-3 hover:bg-orange-50 rounded border-b border-gray-100 last:border-0 leading-relaxed">
                    📌 {p.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white p-6 rounded-xl shadow-xl text-center">
              <h3 className="font-black text-[18px] mb-3">Telegram Job Alerts</h3>
              <p className="text-[13px] opacity-90 mb-5 font-medium leading-relaxed">Join 50k+ Aspirants to get instant notifications on WhatsApp & Telegram.</p>
              <button className="w-full bg-white text-indigo-800 text-[14px] font-black py-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all">Join Now Free</button>
            </div>
          </div>
        </div>

        <section className="mt-16 bg-white rounded-xl border border-gray-200 p-8 shadow-md overflow-hidden">
          <div className="prose prose-lg max-w-none text-gray-800">
            <h2 className="text-2xl md:text-3xl font-black text-blue-900 mb-8 flex items-center gap-4">
              <ShieldCheck className="text-blue-700" size={32} />
              Sarkari Jobs For You: Your Ultimate Gateway to Indian Government Careers
            </h2>
            <p className="mb-6 text-[17px] leading-relaxed font-medium">
              Welcome to <strong className="text-blue-800">SarkariJobsForYou.com</strong>, the most reliable portal for <strong>Sarkari Naukri</strong> (Government Jobs), <strong>Sarkari Results</strong>, <strong>Admit Cards</strong>, and <strong>Exam Syllabus</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
              <div className="space-y-6">
                <h3 className="text-xl font-black text-gray-900 flex items-center gap-3"><CheckCircle className="text-green-600" size={24} /> Latest Govt Results & Forms</h3>
                <p className="text-[15px] leading-relaxed text-gray-700">Covering SSC, UPSC, Railways, Banking, Police, and Defense jobs across India.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-black text-gray-900 flex items-center gap-3"><Book className="text-amber-600" size={24} /> Expert Preparation Guides</h3>
                <p className="text-[15px] leading-relaxed text-gray-700">Download Official Syllabus PDFs and previous year papers for all major exams.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };

  const renderPost = () => {
    const postId = currentHash.split('/').pop();
    const post = MOCK_POSTS.find(p => p.id === postId);
    if (!post) return <div className="p-20 text-center font-black text-gray-400 text-2xl">Post Not Found</div>;
    return (
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 p-8 md:p-12 border-b-4 border-indigo-600 text-center">
             <div className="flex justify-center gap-3 mb-6">
                <span className="bg-indigo-700 text-white px-5 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">{CategoryDisplayNames[post.category]}</span>
                <span className="bg-gray-800 text-white px-5 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">{post.organization}</span>
             </div>
             <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.2] mb-6">{post.title}</h1>
             <div className="flex items-center justify-center gap-6 text-[14px] text-gray-500 font-bold"><span>By Admin</span><span>•</span><span>Updated: {post.postDate}</span></div>
          </div>
          <div className="p-8 md:p-12 space-y-12">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-8 border-yellow-500 text-[18px] text-yellow-950 leading-relaxed font-bold">{post.description}</div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-indigo-800 border-b-4 border-indigo-100 pb-2 inline-block">Overview</h3>
              <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full text-[17px] text-left border-collapse">
                  <tbody>
                    <tr className="bg-gray-100"><td className="p-4 border border-gray-200 font-black text-gray-700 w-1/3">Recruitment Board</td><td className="p-4 border border-gray-200 font-black text-indigo-700">{post.organization}</td></tr>
                    <tr><td className="p-4 border border-gray-200 font-black text-gray-700">Last Date</td><td className="p-4 border border-gray-200 font-black text-red-600 text-xl">{post.lastDate}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-indigo-800 border-b-4 border-indigo-100 pb-2 inline-block">Official Direct Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href={post.link} className="flex items-center justify-center gap-3 p-5 bg-green-600 text-white rounded-xl font-black text-[18px] shadow-xl">Apply Online <span>↗</span></a>
                <a href={post.link} className="flex items-center justify-center gap-3 p-5 bg-blue-600 text-white rounded-xl font-black text-[18px] shadow-xl">Download PDF <span>↓</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
           <button onClick={() => window.location.hash = '#/'} className="bg-white border-2 border-indigo-600 px-10 py-3 rounded-xl text-[16px] font-black text-indigo-600">← Return to Homepage</button>
        </div>
      </main>
    );
  };

  const getRoute = () => {
    if (currentHash.startsWith('#/category/')) {
      const slug = currentHash.replace('#/category/', '');
      return renderCategoryPage(slug);
    }
    if (currentHash.startsWith('#/post/')) {
      return renderPost();
    }
    return renderHome();
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-200">
      <Header />
      <div className="flex-grow">
        {getRoute()}
      </div>
      <Footer />
      <CareerBot />
    </div>
  );
};

export default App;
