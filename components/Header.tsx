import React, { useState } from 'react';
import { Search, Menu, X, Bell, Facebook, Twitter, Send, MessageCircle } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  navigate?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-gray-100">
      {/* Top Bar - Socials & Alerts */}
      <div className="bg-indigo-900 text-white py-2 px-4 md:px-8 hidden md:flex justify-between items-center text-[13px] font-bold">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2 animate-pulse"><Bell size={14} className="text-yellow-400" /> Latest Update: RPF Online Form 2024 Started!</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-blue-300 flex items-center gap-1.5 transition-colors"><Send size={14} /> Join Telegram</a>
          <a href="#" className="hover:text-green-300 flex items-center gap-1.5 transition-colors"><MessageCircle size={14} /> WhatsApp Group</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#/" className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-600 to-indigo-800 bg-clip-text text-transparent tracking-tighter">
                Sarkari Jobs For You
              </span>
              <span className="text-[11px] md:text-[13px] font-black text-gray-500 tracking-[0.2em] uppercase mt-0.5">
                SarkariJobsForYou.com
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={`#${item.path}`}
                className="text-gray-700 hover:text-indigo-700 px-1 py-2 text-[16px] font-black transition-all border-b-4 border-transparent hover:border-indigo-600 tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden xl:block">
              <input
                type="text"
                placeholder="Search job or result..."
                className="pl-10 pr-4 py-3 text-[14px] border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 focus:w-80 transition-all font-bold"
              />
              <Search className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-lg text-gray-500 hover:bg-gray-100 border border-gray-100 shadow-sm"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-gray-100 py-6 px-4 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 text-[16px] border-2 border-gray-100 rounded-xl font-bold"
            />
            <Search className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.path}`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-lg font-black text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
