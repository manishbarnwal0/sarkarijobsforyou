import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { JobSection } from './components/JobSection';
import { CareerBot } from './components/CareerBot';
import { ContactPage } from './components/ContactPage';
import { CategoryListPage } from './components/CategoryListPage';
import { Breadcrumb } from './components/Breadcrumb';
import { MOCK_POSTS } from './constants';
import { Category, CategoryDisplayNames } from './types';
import { TrendingUp, Calendar, Zap, MessageSquare } from 'lucide-react';

import AboutPage from './app/about/page';
import DisclaimerPage from './app/disclaimer/page';
import PrivacyPolicyPage from './app/privacy-policy/page';

const CATEGORY_SEO_DESCRIPTIONS: Record<string, string> = {
  [Category.LATEST_JOB]: "Stay updated with the latest government job notifications from both central and state government departments. We provide daily updates on new vacancies, eligibility criteria, and application links for various sarkari recruitment drives across India. Our team monitors official gazettes and portals to ensure you never miss an opportunity to apply for your dream government career in departments like SSC, Railway, Banking, and Defense.",
  [Category.ADMIT_CARD]: "Find all government exam admit cards, hall tickets, and call letters here. We provide timely information regarding exam dates, city intimation slips, and step-by-step instructions to download your admit cards from official recruitment portals. Whether it is for SSC, UPSC, IBPS, or State exams, ensure you have your hall ticket ready for the examination day by following our direct download links.",
  [Category.RESULT]: "Check the latest government exam results, merit lists, and cut-off marks. We cover comprehensive updates for all major competitive exams including results for written tests, interviews, and final selection lists. Stay informed about your performance and next steps in the selection process with our real-time result alerts and direct score-card download facilities for various sarkari exams.",
  [Category.ADMISSION]: "Explore admission notifications for top universities, colleges, and national-level entrance exams. We provide detailed information on counselling schedules, application forms, and eligibility for courses like CUET, NEET, JEE, and other professional degrees. Stay updated with the latest academic alerts, fee structures, and admission procedures to secure your seat in prestigious educational institutions.",
  [Category.ANSWER_KEY]: "Access official answer keys and response sheets for various government and entrance examinations. We provide direct links to check provisional answer keys and guidance on the official objection process for challenging incorrect answers. Use our resources to estimate your scores and analyze your performance before the final results are announced by the respective recruiting authorities.",
  [Category.SYLLABUS]: "Get detailed exam syllabus and latest exam patterns for all major government competitive exams. We offer subject-wise topics, marking schemes, and preparation guidance to help you plan your studies effectively. Understanding the official syllabus is the first step toward success in exams like SSC CGL, UPSC, BPSC, and others, and we ensure you have the most accurate information.",
  [Category.BIHAR_SPECIAL]: "Dedicated section for all Bihar Board exams, results, and notifications. We cover everything related to BSEB Matric and Intermediate exams, including model papers, admit cards, and latest compartmental updates. For Bihar state government job seekers, this section provides focused alerts for BSSC, BPSC, and Bihar Police recruitment to help you stay ahead.",
  [Category.FEATURED_UPDATES]: "Catch up on important educational news, national policy updates, and significant exam alerts. This section features the most critical information regarding changes in recruitment rules, scholarship announcements, and major educational reforms in India. Stay informed about the latest trends and essential notifications that impact students and job aspirants nationwide.",
  [Category.SSC_CAREERS]: "Comprehensive coverage of all Staff Selection Commission (SSC) exams including CGL, CHSL, GD Constable, MTS, JE, and CPO. We provide the latest notifications, exam calendars, admit cards, and results specifically for SSC aspirants. Follow our updates to stay informed about every stage of the SSC recruitment cycle and departmental vacancy announcements.",
  [Category.UPSC_NOTIFICATIONS]: "Follow all Union Public Service Commission (UPSC) notifications for prestigious services including IAS, IPS, CDS, NDA, and CAPF. We offer timely updates on official exam calendars, detailed vacancy circulars, and result declarations. Stay connected for professional guidance on the UPSC examination process and direct links to official UPSC documentations.",
  [Category.RAILWAY]: "Latest Railway recruitment updates for RRB and RRC including NTPC, Group D, ALP, Technician, and RPF posts. We provide information on online application forms, exam schedules, physical efficiency tests (PET), and final results for the Indian Railways. Monitor this section for massive vacancy announcements and direct links to regional RRB portals.",
  [Category.BANKING_JOBS]: "Your source for all Banking sector jobs including IBPS PO, Clerk, SBI Career, RBI Grade B, and NABARD notifications. We cover recruitment for public sector banks and specialized financial institutions. Stay updated with preliminary and main exam dates, interview schedules, and banking awareness resources to build a successful career in the Indian financial sector.",
  [Category.STATE_POLICE]: "Get updates on State Police recruitment exams for Constable, Sub-Inspector (SI), and Jail Warder posts across different states. We provide detailed info on physical test (PET/PST) requirements, written exam syllabus, and result announcements. Stay informed about state-wise police vacancy notifications and selection procedures to serve in the law enforcement departments."
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    if (window.location.hash.startsWith('#/')) {
      const cleanPath = window.location.hash.replace('#', '');
      window.history.replaceState(null, '', cleanPath);
      handleLocationChange();
    }

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      setCurrentPath(href);
      window.scrollTo(0, 0);
    }
  };

  const renderCategoryPage = (slug: string) => {
    const categoryKey = Object.values(Category).find(val => val === slug) as Category;
    const displayName = categoryKey ? CategoryDisplayNames[categoryKey] : slug;
    const posts = MOCK_POSTS.filter(p => p.category === categoryKey);
    const seoDescription = (categoryKey && CATEGORY_SEO_DESCRIPTIONS[categoryKey]) || `Latest ${displayName} updates and notifications for government exams.`;

    document.title = `${displayName} – SarkariJobsForYou`;

    const breadcrumbs = [
      { label: 'Home', path: '/' },
      { label: displayName }
    ];

    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbs} navigate={navigate} />

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-indigo-900 px-6 py-8 text-white">
            <h1 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">{displayName}</h1>
            <p className="text-indigo-50 text-sm md:text-base leading-relaxed max-w-4xl opacity-90">
              {seoDescription}
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <a href={`/post/${post.id}`} onClick={navigate} className="text-xl font-bold text-blue-800 hover:text-indigo-700 leading-tight block mb-2">
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
                      href={`/post/${post.id}`}
                      onClick={navigate}
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
            <a key={i} href={`/category/${item.slug}`} onClick={navigate} className={`${item.color} border-2 p-4 rounded-xl flex items-center justify-center gap-4 hover:shadow-lg transition-all group shadow-sm`}>
              <div className="bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform">{item.icon}</div>
              <span className="text-[15px] md:text-[17px] font-black text-gray-800 tracking-tight">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <JobSection title="Latest Jobs" category={Category.LATEST_JOB} posts={MOCK_POSTS} color="bg-blue-800" navigate={navigate} />
          <JobSection title="Admit Card" category={Category.ADMIT_CARD} posts={MOCK_POSTS} color="bg-emerald-800" navigate={navigate} />
          <JobSection title="Results" category={Category.RESULT} posts={MOCK_POSTS} color="bg-red-800" navigate={navigate} />
          <JobSection title="Admission" category={Category.ADMISSION} posts={MOCK_POSTS} color="bg-purple-800" navigate={navigate} />
          <JobSection title="Answer Key" category={Category.ANSWER_KEY} posts={MOCK_POSTS} color="bg-orange-800" navigate={navigate} />
          <JobSection title="Syllabus" category={Category.SYLLABUS} posts={MOCK_POSTS} color="bg-cyan-800" navigate={navigate} />
        </div>
      </main>
    );
  };

  const renderPost = (postId: string) => {
    const post = MOCK_POSTS.find(p => p.id === postId);
    if (!post) return <div className="p-20 text-center font-black text-gray-400 text-2xl">Post Not Found</div>;

    const categoryDisplayName = CategoryDisplayNames[post.category];
    const breadcrumbs = [
      { label: 'Home', path: '/' },
      { label: categoryDisplayName, path: `/category/${post.category}` },
      { label: post.title }
    ];

    return (
      <main className="max-w-5xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbs} navigate={navigate} />
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 p-8 md:p-12 border-b-4 border-indigo-600 text-center">
             <div className="flex justify-center gap-3 mb-6">
                <span className="bg-indigo-700 text-white px-5 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">{categoryDisplayName}</span>
             </div>
             <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.2] mb-6">{post.title}</h1>
          </div>
          <div className="p-8 md:p-12 space-y-12">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-8 border-yellow-500 text-[18px] text-yellow-950 leading-relaxed font-bold">{post.description}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href={post.link} className="flex items-center justify-center gap-3 p-5 bg-green-600 text-white rounded-xl font-black text-[18px] shadow-xl">Apply Online <span>↗</span></a>
                <a href={post.link} className="flex items-center justify-center gap-3 p-5 bg-blue-600 text-white rounded-xl font-black text-[18px] shadow-xl">Download PDF <span>↓</span></a>
            </div>
          </div>
        </div>
      </main>
    );
  };

  const getRoute = () => {
    if (currentPath === '/contact') return <ContactPage />;
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/disclaimer') return <DisclaimerPage />;
    if (currentPath === '/privacy-policy') return <PrivacyPolicyPage />;
    if (currentPath === '/category' || currentPath === '/category/') return <CategoryListPage navigate={navigate} />;
    if (currentPath.startsWith('/category/')) {
      const slug = currentPath.split('/').filter(Boolean).pop() || '';
      return renderCategoryPage(slug);
    }
    if (currentPath.startsWith('/post/')) {
      const id = currentPath.split('/').filter(Boolean).pop() || '';
      return renderPost(id);
    }
    return renderHome();
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-200">
      <Header navigate={navigate} />
      <div className="flex-grow">
        {getRoute()}
      </div>
      <Footer navigate={navigate} />
      <CareerBot />
    </div>
  );
};

export default App;