import { Category, JobPost, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Latest Jobs', path: '/category/latest-jobs' },
  { label: 'Results', path: '/category/results' },
  { label: 'Admit Card', path: '/category/admit-card' },
  { label: 'Syllabus', path: '/category/syllabus' },
  { label: 'Contact', path: '/contact' }
];

const generateMocks = (count: number, category: Category, org: string, prefix: string): JobPost[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${category}-${i}`,
    title: `${prefix} ${org} Recruitment 2024 - Post No. ${i + 1} Notification Out`,
    shortTitle: `${org} Update ${i + 1}`,
    description: `Detailed notification for ${org} recruitment in the ${category} category for various posts including eligibility and application process.`,
    category,
    postDate: '2024-05-24',
    lastDate: '2024-06-30',
    organization: org,
    totalPosts: 100 * (i + 1),
    tags: [org, 'Govt Job', category],
    link: '#'
  }));
};

export const MOCK_POSTS: JobPost[] = [
  {
    id: 'rbi-office-attendant-recruitment-2026',
    title: 'RBI Office Attendant Recruitment 2026 Apply Online for 572 Posts – Notification, Eligibility, Salary, Selection Process',
    shortTitle: 'RBI Office Attendant 2026',
    description: 'RBI Office Attendant Recruitment 2026 for 572 posts. Check eligibility, age limit, fee, exam pattern, salary, and how to apply online.',
    category: Category.LATEST_JOB,
    postDate: '2025-01-20',
    lastDate: '2026-02-15',
    organization: 'Reserve Bank of India (RBI)',
    totalPosts: 572,
    tags: ['RBI', 'Banking Jobs', 'Latest Jobs', 'Office Attendant'],
    link: 'https://www.rbi.org.in',
    content: `
      <p>The Reserve Bank of India (RBI) has released the official notification for RBI Office Attendant Recruitment 2026 to fill 572 vacancies across various RBI offices in India. This recruitment drive is a great opportunity for 10th pass candidates who are looking for a stable central government job with attractive salary, allowances, and job security.</p>
      
      <p>Interested and eligible candidates can apply online through the official RBI recruitment portal within the prescribed dates. All important details such as eligibility criteria, age limit, application fee, selection process, exam pattern, and how to apply are explained below.</p>

      <h2>RBI Office Attendant Recruitment 2026 – Overview</h2>
      <p>This recruitment is conducted annually or bi-annually by the Reserve Bank of India to select candidates for the post of Office Attendant in various regional offices. The selection is based on a country-wide competitive Test (Online Test) followed by a Language Proficiency Test (in Regional Language).</p>

      <h2>Important Dates</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Event</th>
            <th className="border border-gray-300 p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2">Notification Release Date</td><td className="border border-gray-300 p-2">January 2026</td></tr>
          <tr><td className="border border-gray-300 p-2">Online Application Start Date</td><td className="border border-gray-300 p-2">January 2026</td></tr>
          <tr><td className="border border-gray-300 p-2">Last Date to Apply Online</td><td className="border border-gray-300 p-2">February 2026</td></tr>
          <tr><td className="border border-gray-300 p-2">Last Date for Fee Payment</td><td className="border border-gray-300 p-2">February 2026</td></tr>
          <tr><td className="border border-gray-300 p-2">Online Examination Date</td><td className="border border-gray-300 p-2">March / April 2026</td></tr>
          <tr><td className="border border-gray-300 p-2">Admit Card Release</td><td className="border border-gray-300 p-2">Before Exam</td></tr>
        </tbody>
      </table>
      <p><em>*Exact dates will be updated as per official RBI notice.</em></p>

      <h2>Application Fee</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Category</th>
            <th className="border border-gray-300 p-2 text-left">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2">General / OBC / EWS</td><td className="border border-gray-300 p-2">Rs. 450/-</td></tr>
          <tr><td className="border border-gray-300 p-2">SC / ST / PwBD</td><td className="border border-gray-300 p-2">Rs. 50/-</td></tr>
          <tr><td className="border border-gray-300 p-2">RBI Staff</td><td className="border border-gray-300 p-2">Nil</td></tr>
        </tbody>
      </table>
      <p>Payment Mode: Online through Debit Cards, Credit Cards, Internet Banking, IMPS, Cash Cards/ Mobile Wallets.</p>

      <h2>Age Limit (as on 01/01/2026)</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Minimum Age</th>
            <th className="border border-gray-300 p-2 text-left">Maximum Age</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2">18 Years</td><td className="border border-gray-300 p-2">25 Years</td></tr>
        </tbody>
      </table>
      <p><strong>Age Relaxation:</strong></p>
      <ul>
        <li>SC / ST: 5 Years</li>
        <li>OBC: 3 Years</li>
        <li>PwBD: As per rules</li>
        <li>Ex-Servicemen: As per rules</li>
      </ul>

      <h2>Educational Qualification</h2>
      <ul>
        <li>Candidate should have passed 10th Standard (S.S.C./Matriculation) from a recognized Board.</li>
        <li>The candidate should be a graduate from the state/UT coming under the Regional Jurisdiction of the Recruiting Office.</li>
        <li>Candidate should be a domicile of the State/UT coming under the Regional Jurisdiction of the Recruitment Office to which he/she is applying.</li>
      </ul>

      <h2>RBI Office Attendant Vacancy Details 2026 (Total: 572 Posts)</h2>
      <p>Vacancies are distributed across various offices including Ahmedabad, Bengaluru, Bhopal, Bhubaneswar, Chandigarh, Chennai, Guwahati, Hyderabad, Jaipur, Jammu, Kanpur, Kochi, Kolkata, Lucknow, Mumbai, Nagpur, New Delhi, Patna, and Thiruvananthapuram. Please refer to the official notification for category-wise distribution.</p>

      <h2>Selection Process</h2>
      <ul>
        <li>Online Written Examination</li>
        <li>Language Proficiency Test (LPT)</li>
      </ul>
      <p><em>Note: No interview will be conducted. Final merit will be based on written exam marks, subject to qualifying LPT.</em></p>

      <h2>Exam Pattern</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Section</th>
            <th className="border border-gray-300 p-2 text-left">Questions</th>
            <th className="border border-gray-300 p-2 text-left">Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2">Reasoning Ability</td><td className="border border-gray-300 p-2">30</td><td className="border border-gray-300 p-2">30</td></tr>
          <tr><td className="border border-gray-300 p-2">Numerical Ability</td><td className="border border-gray-300 p-2">30</td><td className="border border-gray-300 p-2">30</td></tr>
          <tr><td className="border border-gray-300 p-2">General English</td><td className="border border-gray-300 p-2">30</td><td className="border border-gray-300 p-2">30</td></tr>
          <tr><td className="border border-gray-300 p-2">General Awareness</td><td className="border border-gray-300 p-2">30</td><td className="border border-gray-300 p-2">30</td></tr>
          <tr className="font-bold">
            <td className="border border-gray-300 p-2">Total</td>
            <td className="border border-gray-300 p-2">120</td>
            <td className="border border-gray-300 p-2">120</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>Duration: 90 Minutes</li>
        <li>Negative Marking: 1/4th (0.25) marks for each wrong answer.</li>
        <li>Language: Except English, other sections will be available in English and Hindi.</li>
      </ul>

      <h2>Language Proficiency Test (LPT)</h2>
      <p>Candidates provisionally selected from the online examination will have to undergo a language proficiency test (LPT). The LPT will be conducted in the Official / Local Language of the State concerned.</p>
      <ul>
        <li>The LPT is qualifying in nature.</li>
        <li>Candidates not qualifying LPT will not be considered for selection.</li>
      </ul>

      <h2>Salary Details</h2>
      <p><strong>Monthly Salary:</strong> Rs. 25,000 – Rs. 27,000 (Approx. Gross Monthly Emoluments at the start of career).</p>
      <p><strong>Allowances & Benefits:</strong></p>
      <ul>
        <li>Dearness Allowance</li>
        <li>House Rent Allowance</li>
        <li>City Compensatory Allowance</li>
        <li>Transport Allowance etc.</li>
        <li>Reimbursement of expenses for maintenance of vehicle for eligible employees.</li>
      </ul>

      <h2>How to Apply</h2>
      <ol>
        <li>Visit the official RBI website: www.rbi.org.in</li>
        <li>Click on "Recruitment for the post of Office Attendant-2026" under the 'Opportunities@RBI' section.</li>
        <li>Click on "New Registration" and provide basic details like Name, Contact, and Email.</li>
        <li>Login using the registration ID and password sent to your mobile/email.</li>
        <li>Fill in educational details and upload scanned documents.</li>
        <li>Preview the application and pay the application fee online.</li>
        <li>Submit the form and take a printout of the final application for future reference.</li>
      </ol>

      <h2>Documents Required</h2>
      <ul>
        <li>Scanned Photograph (20kb-50kb)</li>
        <li>Scanned Signature (10kb-20kb)</li>
        <li>Left Thumb Impression</li>
        <li>Handwritten Declaration</li>
        <li>Valid ID Proof (Aadhar/PAN/Voter ID)</li>
      </ul>

      <h2>Important Instructions</h2>
      <ul>
        <li>Read the full notification carefully before applying.</li>
        <li>Ensure you meet all eligibility criteria as of the cut-off date.</li>
        <li>Provide a valid mobile number and email ID as all communication will be sent there.</li>
        <li>Application once submitted cannot be modified.</li>
      </ul>

      <h2>Important Links</h2>
      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 font-bold">Apply Online</td>
            <td className="border border-gray-300 p-2 text-blue-600 font-bold"><a href="https://www.rbi.org.in" target="_blank">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 font-bold">Notification PDF</td>
            <td className="border border-gray-300 p-2 text-blue-600 font-bold">Available in Recruitment Section</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 font-bold">Official Website</td>
            <td className="border border-gray-300 p-2 text-blue-600 font-bold"><a href="https://www.rbi.org.in" target="_blank">rbi.org.in</a></td>
          </tr>
        </tbody>
      </table>
      
      <p style="margin-top: 30px; font-weight: bold; border-top: 1px solid #eee; pt-4;">Author: Manish Kumar</p>
    `
  },
  {
    id: 'ignou-january-2026-re-registration-date-extended',
    title: 'IGNOU January 2026 Session: री-रजिस्ट्रेशन की तारीख बढ़ी, अब 31 जनवरी तक करें आवेदन',
    shortTitle: 'IGNOU Re-Registration 2026',
    description: 'IGNOU January 2026 session re-registration date extended. Eligible students can now apply online till 31 January 2026 at ignou.ac.in.',
    category: Category.ADMISSION,
    postDate: '2025-01-20',
    lastDate: '2026-01-31',
    organization: 'IGNOU',
    totalPosts: 0,
    tags: ['IGNOU', 'Admission', 'Re-Registration'],
    link: 'https://ignou.ac.in',
    content: `
      <p>इन्दिरा गांधी नेशनल ओपन यूनिवर्सिटी (IGNOU) ने जनवरी 2026 सत्र के लिए री-रजिस्ट्रेशन की अंतिम तिथि को आगे बढ़ा दिया है। वे सभी छात्र जो अगले सेमेस्टर या वर्ष के लिए आवेदन करना चाहते हैं, अब 31 जनवरी 2026 तक अपना पंजीकरण पूरा कर सकते हैं।</p>
      
      <p>विश्वविद्यालय द्वारा जारी आधिकारिक सूचना के अनुसार, छात्रों को एक और मौका दिया गया है ताकि वे बिना किसी शैक्षणिक सत्र की हानि के अपनी पढ़ाई जारी रख सकें।</p>

      <h2>IGNOU Re-Registration Date Extend क्यों की गई?</h2>
      <p>छात्रों की भारी मांग और तकनीकी कारणों को देखते हुए विश्वविद्यालय प्रशासन ने यह निर्णय लिया है ताकि कोई भी पात्र छात्र अगले शैक्षणिक सत्र में प्रवेश से वंचित न रह जाए। पोर्टल पर आ रहे भारी ट्रैफिक के कारण भी कई छात्रों को आवेदन में कठिनाई हो रही थी, जिसे अब सुलझा लिया गया है।</p>

      <h2>री-रजिस्ट्रेशन क्यों जरूरी है?</h2>
      <ul>
        <li><strong>अगले सेमेस्टर में प्रमोशन:</strong> इसके माध्यम से आप बिना परीक्षा परिणाम आए ही अगले सेमेस्टर के लिए पात्र हो जाते हैं।</li>
        <li><strong>पढ़ाई जारी रखने की पात्रता:</strong> यह आपकी पढ़ाई में निरंतरता सुनिश्चित करता है।</li>
        <li><strong>एडमिशन सुरक्षित रखने के लिए जरूरी:</strong> समय पर पंजीकरण न करने से आपका कीमती समय बर्बाद हो सकता है।</li>
      </ul>

      <h2>री-रजिस्ट्रेशन करने से छात्रों को क्या लाभ मिलता है?</h2>
      <ul>
        <li>व्यक्तिगत जानकारी अपडेट करने का अवसर मिलता है।</li>
        <li>अगले सत्र के लिए पसंदीदा विषय / कोर्स चयन की सुविधा।</li>
        <li>घर बैठे सुरक्षित ऑनलाइन फीस भुगतान का विकल्प।</li>
      </ul>

      <h2>IGNOU Re-Registration 2026: आवेदन कैसे करें?</h2>
      <ol>
        <li>सबसे पहले IGNOU की आधिकारिक वेबसाइट ignou.ac.in पर जाएं।</li>
        <li>होमपेज पर 'Register Online' टैब में 'Re-Registration' लिंक पर क्लिक करें।</li>
        <li>अपने एनरोलमेंट नंबर और पासवर्ड के साथ पोर्टल पर लॉग-इन करें।</li>
        <li>मांगी गई सभी शैक्षणिक और व्यक्तिगत जानकारी सावधानीपूर्वक भरें।</li>
        <li>निर्धारित कोर्स फीस का भुगतान ऑनलाइन माध्यम (Debit/Credit Card/Net Banking) से करें।</li>
        <li>सफलतापूर्वक सबमिशन के बाद कन्फर्मेशन रसीद डाउनलोड करें।</li>
      </ol>

      <h2>छात्रों के लिए जरूरी सलाह</h2>
      <ul>
        <li>केवल आधिकारिक वेबसाइट का उपयोग करें और किसी अनाधिकृत लिंक से बचें।</li>
        <li>अंतिम तारीख (31 जनवरी) का इंतजार न करें, क्योंकि आखिरी दिनों में सर्वर पर लोड बढ़ सकता है।</li>
        <li>भविष्य के संदर्भ के लिए भुगतान रसीद और आवेदन पत्र सुरक्षित रखें।</li>
      </ul>

      <h2>महत्वपूर्ण लिंक</h2>
      <ul>
        <li><strong>Re-Registration Apply Online</strong> – <a href="https://ignou.ac.in" target="_blank">ignou.ac.in</a></li>
        <li><strong>Official Website</strong> – <a href="https://ignou.ac.in" target="_blank">ignou.ac.in</a></li>
      </ul>
      
      <p>IGNOU January 2026 admission से जुड़ी सभी नई अपडेट्स के लिए <strong>SarkariJobsForYou.com</strong> को नियमित विज़िट करते रहें।</p>
      
      <p style="margin-top: 30px; font-weight: bold; border-top: 1px solid #eee; pt-4;">लेखक: Manish Kumar</p>
    `
  },
  ...generateMocks(15, Category.LATEST_JOB, 'Railway', 'New'),
  ...generateMocks(15, Category.ADMIT_CARD, 'SSC', 'Download'),
  ...generateMocks(15, Category.RESULT, 'UPPRPB', 'Check'),
  ...generateMocks(11, Category.ADMISSION, 'NTA', 'CUET'),
  ...generateMocks(10, Category.ANSWER_KEY, 'UPSC', 'Final'),
  ...generateMocks(10, Category.SYLLABUS, 'BPSC', 'Exam'),
  ...generateMocks(10, Category.BIHAR_SPECIAL, 'BSEB', 'Bihar'),
  ...generateMocks(8, Category.SSC_CAREERS, 'SSC', 'CGL'),
  ...generateMocks(8, Category.UPSC_NOTIFICATIONS, 'UPSC', 'IAS'),
  ...generateMocks(8, Category.RAILWAY, 'RRB', 'ALP'),
  ...generateMocks(8, Category.BANKING_JOBS, 'SBI', 'PO'),
  ...generateMocks(8, Category.STATE_POLICE, 'UPP', 'Constable'),
];