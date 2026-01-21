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

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">RBI Office Attendant Recruitment 2026 – Overview</h2>
      <p>This recruitment is conducted by the Reserve Bank of India to select candidates for the post of Office Attendant in various regional offices. Selection is based on an Online Test followed by a Language Proficiency Test (LPT) in the respective regional language.</p>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Important Dates</h2>
      <table border="1" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <thead style="background-color: #f3f4f6;">
          <tr>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Event</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Notification Release Date</td><td style="border: 1px solid #d1d5db; padding: 10px;">January 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Online Application Start Date</td><td style="border: 1px solid #d1d5db; padding: 10px;">January 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Last Date to Apply Online</td><td style="border: 1px solid #d1d5db; padding: 10px;">February 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Last Date for Fee Payment</td><td style="border: 1px solid #d1d5db; padding: 10px;">February 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Online Examination Date</td><td style="border: 1px solid #d1d5db; padding: 10px;">March / April 2026</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Admit Card Release</td><td style="border: 1px solid #d1d5db; padding: 10px;">Before Exam</td></tr>
        </tbody>
      </table>
      <p><em>*Exact dates will be updated as per official RBI notice.</em></p>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Application Fee</h2>
      <table border="1" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <thead style="background-color: #f3f4f6;">
          <tr>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Category</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">General / OBC / EWS</td><td style="border: 1px solid #d1d5db; padding: 10px;">Rs. 450/-</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">SC / ST / PwBD</td><td style="border: 1px solid #d1d5db; padding: 10px;">Rs. 50/-</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">RBI Staff</td><td style="border: 1px solid #d1d5db; padding: 10px;">Nil</td></tr>
        </tbody>
      </table>
      <p>Payment Mode: Online through Debit Cards, Credit Cards, Internet Banking, IMPS, Cash Cards/ Mobile Wallets.</p>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Age Limit (As on Notification Date)</h2>
      <table border="1" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <thead style="background-color: #f3f4f6;">
          <tr>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Minimum Age</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Maximum Age</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">18 Years</td><td style="border: 1px solid #d1d5db; padding: 10px;">25 Years</td></tr>
        </tbody>
      </table>
      <h3 style="font-weight: bold; margin-top: 12px;">Age Relaxation:</h3>
      <ul>
        <li>SC / ST: 5 Years</li>
        <li>OBC: 3 Years</li>
        <li>PwBD: As per rules</li>
        <li>Ex-Servicemen: As per rules</li>
      </ul>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Educational Qualification</h2>
      <ul>
        <li>Candidate should have passed 10th Standard (S.S.C./Matriculation) from a recognized Board.</li>
        <li>Should be a graduate from the state/UT coming under the Regional Jurisdiction of the Recruiting Office.</li>
        <li>Higher educational qualifications are allowed as per the latest norms.</li>
      </ul>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">RBI Office Attendant Vacancy Details 2026</h2>
      <p><strong>Total: 572 Posts</strong></p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        <ul>
          <li>Ahmedabad</li>
          <li>Bengaluru</li>
          <li>Bhopal</li>
          <li>Bhubaneswar</li>
          <li>Chandigarh</li>
          <li>Chennai</li>
          <li>Guwahati</li>
          <li>Hyderabad</li>
          <li>Jaipur</li>
        </ul>
        <ul>
          <li>Jammu</li>
          <li>Kanpur</li>
          <li>Kochi</li>
          <li>Kolkata</li>
          <li>Lucknow</li>
          <li>Mumbai</li>
          <li>Nagpur</li>
          <li>New Delhi</li>
          <li>Patna</li>
        </ul>
      </div>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Selection Process</h2>
      <ul>
        <li>Online Written Examination</li>
        <li>Language Proficiency Test (LPT)</li>
      </ul>
      <p style="background-color: #fffbeb; padding: 12px; border-left: 4px solid #f59e0b; font-weight: bold;">No Interview. Final merit based on Written Exam + LPT.</p>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Exam Pattern</h2>
      <table border="1" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <thead style="background-color: #f3f4f6;">
          <tr>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Section</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Questions</th>
            <th style="border: 1px solid #d1d5db; padding: 12px; text-align: left;">Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Reasoning Ability</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">Numerical Ability</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">General English</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td></tr>
          <tr><td style="border: 1px solid #d1d5db; padding: 10px;">General Awareness</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td><td style="border: 1px solid #d1d5db; padding: 10px;">30</td></tr>
          <tr style="font-weight: bold;"><td style="border: 1px solid #d1d5db; padding: 10px;">Total</td><td style="border: 1px solid #d1d5db; padding: 10px;">120</td><td style="border: 1px solid #d1d5db; padding: 10px;">120</td></tr>
        </tbody>
      </table>
      <ul>
        <li><strong>Duration:</strong> 90 Minutes</li>
        <li><strong>Negative Marking:</strong> 1/4th (0.25) for each wrong answer.</li>
        <li><strong>Language:</strong> English and Hindi (Except English section).</li>
      </ul>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Language Proficiency Test (LPT)</h2>
      <p>Candidates selected in the written exam must undergo LPT in the official local language of the state concerned.</p>
      <ul>
        <li>Reading</li>
        <li>Writing</li>
        <li>Speaking</li>
        <li>Qualifying nature (Must pass to be eligible for final selection).</li>
      </ul>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">RBI Office Attendant Salary 2026</h2>
      <p style="font-size: 18px; font-weight: bold; color: #059669;">Monthly Salary: Rs. 25,000 – Rs. 27,000 (Approx. Gross)</p>
      <ul>
        <li>Dearness Allowance (DA)</li>
        <li>House Rent Allowance (HRA)</li>
        <li>Medical and Transport benefits.</li>
      </ul>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">How to Apply Online</h2>
      <ol>
        <li>Visit the official RBI website: <strong>www.rbi.org.in</strong></li>
        <li>Go to the 'Recruitment' or 'Opportunities@RBI' section.</li>
        <li>Complete the 'New Registration' with personal details.</li>
        <li>Fill out the complete Application Form.</li>
        <li>Upload scanned photograph, signature, and thumb impression.</li>
        <li>Pay the application fee online.</li>
        <li>Review and Print the final application form.</li>
      </ol>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Documents Required</h2>
      <ul>
        <li>Aadhar Card / ID Proof.</li>
        <li>Educational Certificates (10th Marksheet).</li>
        <li>Passport size photograph.</li>
        <li>Scanned Signature.</li>
      </ul>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Important Instructions</h2>
      <ul>
        <li>Read the full notification carefully before applying.</li>
        <li>Apply only for one region/office.</li>
        <li>Ensure you meet the local language requirements.</li>
      </ul>

      <h2 style="color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">Important Links</h2>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px; font-weight: bold; width: 40%;">Apply Online</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;"><a href="https://www.rbi.org.in" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: none;">Official RBI Website</a></td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px; font-weight: bold;">Notification PDF</td>
            <td style="border: 1px solid #d1d5db; padding: 12px; color: #ef4444; font-weight: bold;">Available in Recruitment Section</td>
          </tr>
          <tr>
            <td style="border: 1px solid #d1d5db; padding: 12px; font-weight: bold;">Official Website</td>
            <td style="border: 1px solid #d1d5db; padding: 12px;"><a href="https://www.rbi.org.in" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: none;">https://www.rbi.org.in</a></td>
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