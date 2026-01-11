
import React from 'react';
import { 
  ArrowRight, 
  Flame, 
  FileCheck, 
  CreditCard, 
  BookOpen, 
  Key, 
  GraduationCap, 
  Trophy, 
  MapPin
} from 'lucide-react';
import { JobPost, Category } from '../types';

interface JobSectionProps {
  title: string;
  category: Category;
  posts: JobPost[];
  color: string;
}

const categoryIconMap: Record<string, React.ReactNode> = {
  [Category.LATEST_JOB]: <Flame size={16} />,
  [Category.ADMIT_CARD]: <CreditCard size={16} />,
  [Category.RESULT]: <FileCheck size={16} />,
  [Category.SYLLABUS]: <BookOpen size={16} />,
  [Category.ANSWER_KEY]: <Key size={16} />,
  [Category.ADMISSION]: <GraduationCap size={16} />,
  [Category.SCHOLARSHIP]: <Trophy size={16} />,
  [Category.UP_SCHOLARSHIP]: <MapPin size={16} />,
  [Category.BIHAR_SPECIAL]: <MapPin size={16} />,
};

export const JobSection: React.FC<JobSectionProps> = ({ title, category, posts, color }) => {
  const filteredPosts = posts.filter(post => post.category === category).slice(0, 10);

  return (
    <div className="flex flex-col bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden h-full">
      <div className={`${color} px-4 py-3 flex justify-between items-center text-white border-b border-black/5`}>
        <h3 className="font-bold text-[17px] flex items-center gap-2 tracking-tight">
          {categoryIconMap[category] || <Flame size={16} />}
          {title}
        </h3>
        <a href={`#/category/${category}`} className="text-[13px] font-semibold hover:underline flex items-center gap-0.5 opacity-90">
          View More <ArrowRight size={12} />
        </a>
      </div>

      <div className="p-0 flex flex-col divide-y divide-gray-100 overflow-y-auto max-h-[550px] custom-scrollbar">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <a
              key={post.id}
              href={`#/post/${post.id}`}
              className="group flex flex-col p-3.5 hover:bg-blue-50/50 transition-all cursor-pointer border-l-4 border-transparent hover:border-blue-600"
            >
              <div className="flex items-start gap-2">
                <div className="mt-2 shrink-0">
                   <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-indigo-700 uppercase tracking-widest mb-1">
                      {post.shortTitle}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-[15px] md:text-[16px] font-bold text-blue-900 group-hover:text-blue-700 leading-[1.4] transition-colors">
                        {post.title}
                      </span>
                      <span className="inline-block px-1.5 rounded bg-red-600 text-white text-[10px] font-black animate-pulse leading-tight py-0.5">
                        NEW
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[12px] text-indigo-600 font-bold uppercase tracking-tight">
                      📍 {post.organization}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="p-10 text-center text-gray-400 text-sm italic">
            Updating Soon...
          </div>
        )}
      </div>
    </div>
  );
};
