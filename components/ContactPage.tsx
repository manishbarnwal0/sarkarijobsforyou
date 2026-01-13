
import React, { useState } from 'react';
import { Mail, User, Tag, MessageSquare, Send, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      submissions.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('contact_submissions', JSON.stringify(submissions));
      
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  if (submitted) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 animate-in zoom-in duration-300">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="text-green-600" size={48} />
            </div>
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-4">Message Received!</h1>
          <p className="text-gray-600 text-lg font-medium mb-8">
            Thank you for reaching out. Our team will get back to you at your provided email address within 24-48 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-black text-indigo-900 mb-4">Get in Touch</h1>
            <p className="text-gray-600 text-lg font-medium">
              Have questions about a specific job notification or need help with a result? Feel free to contact us.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-black text-gray-900">Email Us</h4>
                <p className="text-gray-600 font-medium">support@sarkarijobsforyou.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-indigo-500 outline-none transition-all font-bold"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 flex items-center gap-2">
                  <Mail size={14} /> Email Address
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-indigo-500 outline-none transition-all font-bold"
                  placeholder="example@mail.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black text-gray-700 flex items-center gap-2">
                <Tag size={14} /> Subject
              </label>
              <input
                required
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-indigo-500 outline-none transition-all font-bold"
                placeholder="Job Inquiry / Feedback / Help"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black text-gray-700 flex items-center gap-2">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-indigo-500 outline-none transition-all font-bold resize-none"
                placeholder="How can we help you today?"
              ></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50"
            >
              {loading ? 'Sending...' : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
