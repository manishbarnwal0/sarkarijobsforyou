import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer – SarkariJobsForYou',
  description: 'Legal disclaimer for SarkariJobsForYou.com. Please read our policy regarding information accuracy and our status as a non-government entity.',
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-black text-indigo-900 mb-8 border-b-4 border-indigo-100 pb-2">Disclaimer</h1>
        
        <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-800 font-bold uppercase tracking-tight m-0">Attention Visitors:</p>
            <p className="text-red-700 m-0">SarkariJobsForYou.com is NOT a government website or a government agency.</p>
          </div>

          <p>
            The information provided on <strong>SarkariJobsForYou.com</strong> is for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Professional Disclaimer</h2>
          <p>
            The site cannot and does not contain professional career advice. The career information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Verification of Content</h2>
          <p>
            While we strive to provide the most accurate and up-to-date information, government notifications are subject to change. Candidates are strictly advised to visit the official website of the recruiting authority (e.g., SSC, UPSC, IBPS, RRB) to verify the details mentioned in any job post or news item before applying.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">External Links Disclaimer</h2>
          <p>
            The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Limitation of Liability</h2>
          <p>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
        </div>
      </div>
    </main>
  );
}
