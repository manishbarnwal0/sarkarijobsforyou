import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – SarkariJobsForYou',
  description: 'Learn about SarkariJobsForYou.com, India\'s leading portal for latest government job notifications, admit cards, results, and exam syllabus.',
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-black text-indigo-900 mb-8 border-b-4 border-indigo-100 pb-2">About Us</h1>
        
        <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg">
            Welcome to <strong>SarkariJobsForYou.com</strong>, your number one source for all Indian government job updates. We are dedicated to providing you the very best of career information, with an emphasis on accuracy, timeliness, and ease of access.
          </p>
          
          <p>
            Founded in 2024, SarkariJobsForYou has come a long way from its beginnings. When we first started out, our passion for helping job aspirants navigate the complex world of government recruitment drove us to start this comprehensive portal.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
          <p>
            Our mission is to simplify the job search process for millions of Indian students. We collect information from various official gazettes, government websites, and news portals to ensure that you never miss a deadline. Whether it is the latest SSC notification, UPSC results, Railway recruitment, or State Police exams, we cover it all.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8">What We Provide</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Latest Jobs:</strong> Instant updates on new vacancies across Central and State departments.</li>
            <li><strong>Admit Cards:</strong> Direct links to download exam hall tickets as soon as they are released.</li>
            <li><strong>Results:</strong> Real-time alerts for written tests, interviews, and final selection lists.</li>
            <li><strong>Syllabus & Pattern:</strong> Detailed exam patterns and official syllabus for better preparation.</li>
            <li><strong>Educational Updates:</strong> Information on university admissions, board results (BSEB, CBSE), and scholarships.</li>
          </ul>

          <p>
            We hope you enjoy our platform as much as we enjoy offering these services to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          
          <p className="italic font-medium">Sincerely,<br/>The SarkariJobsForYou Team</p>
        </div>
      </div>
    </main>
  );
}
