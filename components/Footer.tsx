import React from 'react';
import { Mail, Shield, AlertCircle, Info, ExternalLink, List } from 'lucide-react';

interface FooterProps {
  navigate: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Sarkari Jobs For You</h2>
            <p className="text-sm leading-relaxed">
              Leading portal for all Indian government job seekers. We provide timely updates on Latest Jobs, Admit Cards, Results, Answer Keys, and Exam Syllabus.
            </p>
            <div className="flex items-center space-x-3 text-indigo-400">
               <a href="mailto:support@sarkarijobsforyou.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2"><ExternalLink size={16} /> Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/category/ssc-careers" onClick={navigate} className="hover:text-indigo-400 transition-colors">SSC Career</a></li>
              <li><a href="/category/upsc-notifications" onClick={navigate} className="hover:text-indigo-400 transition-colors">UPSC Notifications</a></li>
              <li><a href="/category/railway" onClick={navigate} className="hover:text-indigo-400 transition-colors">Railway RRB/RRC</a></li>
              <li><a href="/category/banking-jobs" onClick={navigate} className="hover:text-indigo-400 transition-colors">Banking Jobs (IBPS/SBI)</a></li>
              <li><a href="/category/state-police-recruitment" onClick={navigate} className="hover:text-indigo-400 transition-colors">State Police Recruitment</a></li>
            </ul>
          </div>

          {/* EEAT & Policy */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Shield size={16} /> Legal & Privacy</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/category/" onClick={navigate} className="hover:text-indigo-400 transition-colors flex items-center gap-1"><List size={14} /> Categories</a></li>
              <li><a href="/about" onClick={navigate} className="hover:text-indigo-400 transition-colors flex items-center gap-1"><Info size={14} /> About Us</a></li>
              <li><a href="/disclaimer" onClick={navigate} className="hover:text-indigo-400 transition-colors flex items-center gap-1"><AlertCircle size={14} /> Disclaimer</a></li>
              <li><a href="/privacy-policy" onClick={navigate} className="hover:text-indigo-400 transition-colors flex items-center gap-1"><Shield size={14} /> Privacy Policy</a></li>
              <li><a href="/contact" onClick={navigate} className="hover:text-indigo-400 transition-colors flex items-center gap-1"><Mail size={14} /> Contact Us</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-white font-bold mb-4">Job Alerts in Mail</h3>
            <p className="text-xs mb-4 text-gray-400">Join 50,000+ candidates for weekly job updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-none px-4 py-2 rounded-l-lg text-sm w-full focus:ring-1 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg text-sm font-bold transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SarkariJobsForYou.com. All Rights Reserved. 
            <br />
            Disclaimer: We are not a government agency. We only provide info sourced from official gazettes and websites.
          </p>
        </div>
      </div>
    </footer>
  );
};