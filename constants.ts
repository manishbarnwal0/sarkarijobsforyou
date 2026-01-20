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

      <h2>IGNOU Re-Registration Date Extend क्यों की गई?</h2>
      <p>छात्रों की भारी मांग और तकनीकी कारणों को देखते हुए विश्वविद्यालय प्रशासन ने यह निर्णय लिया है ताकि कोई भी पात्र छात्र अगले शैक्षणिक सत्र में प्रवेश से वंचित न रह जाए।</p>

      <h2>री-रजिस्ट्रेशन क्यों जरूरी है?</h2>
      <p>री-रजिस्ट्रेशन का अर्थ है अगले वर्ष या सेमेस्टर के लिए अपना नामांकन कराना। यदि आप समय पर री-रजिस्ट्रेशन नहीं करते हैं, तो आपका 6 महीने या 1 साल का समय बर्बाद हो सकता है।</p>

      <h2>री-रजिस्ट्रेशन करने से छात्रों को क्या लाभ मिलता है?</h2>
      <ul>
        <li>शैक्षणिक सत्र में निरंतरता बनी रहती है।</li>
        <li>समय पर असाइनमेंट जमा करने और परीक्षा देने की पात्रता मिलती है।</li>
        <li>डिग्री पूरा करने में देरी नहीं होती है।</li>
      </ul>

      <h2>IGNOU Re-Registration 2026: आवेदन कैसे करें?</h2>
      <p>छात्र नीचे दिए गए चरणों का पालन करके अपना री-रजिस्ट्रेशन पूरा कर सकते हैं:</p>
      <ul>
        <li>IGNOU की आधिकारिक वेबसाइट ignou.ac.in पर जाएं।</li>
        <li>'Register Online' सेक्शन में 'Re-Registration' लिंक पर क्लिक करें।</li>
        <li>अपने यूजरनेम और पासवर्ड के साथ लॉगिन करें।</li>
        <li>दिए गए निर्देशों को ध्यान से पढ़ें और कोर्स का चुनाव करें।</li>
        <li>निर्धारित शुल्क का भुगतान ऑनलाइन माध्यम से करें।</li>
      </ul>

      <h2>छात्रों के लिए जरूरी सलाह</h2>
      <p>अंतिम समय की तकनीकी समस्याओं से बचने के लिए छात्रों को सलाह दी जाती है कि वे 31 जनवरी से पहले ही अपनी प्रक्रिया पूरी कर लें। कृपया भुगतान के बाद रसीद का प्रिंट आउट जरूर ले लें।</p>

      <h2>महत्वपूर्ण लिंक</h2>
      <p><strong>Re-Registration Apply Online:</strong> <a href="https://ignou.ac.in" target="_blank">Click Here</a></p>
      <p><strong>Official Website:</strong> <a href="https://ignou.ac.in" target="_blank">ignou.ac.in</a></p>
      
      <p style="margin-top: 20px; font-weight: bold;">Author: Manish Kumar</p>
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