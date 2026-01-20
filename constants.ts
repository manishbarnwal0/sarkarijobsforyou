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