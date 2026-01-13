import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – SarkariJobsForYou',
  description: 'Privacy Policy for SarkariJobsForYou.com. Learn how we collect, use, and protect your personal data and our use of cookies.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-black text-indigo-900 mb-8 border-b-4 border-indigo-100 pb-2">Privacy Policy</h1>
        
        <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>Last updated: May 2024</p>
          
          <p>
            At <strong>SarkariJobsForYou.com</strong>, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SarkariJobsForYou and how we use it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Log Files</h2>
          <p>
            SarkariJobsForYou follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Cookies and Web Beacons</h2>
          <p>
            Like any other website, SarkariJobsForYou uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Advertising Partners</h2>
          <p>
            Some of advertisers on our site may use cookies and web beacons. Our advertising partners include Google AdSense. Each of our advertising partners has their own Privacy Policy for their policies on user data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Third Party Privacy Policies</h2>
          <p>
            SarkariJobsForYou's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact Information</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>support@sarkarijobsforyou.com</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
