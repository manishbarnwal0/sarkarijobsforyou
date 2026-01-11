
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
  ...generateMocks(15, Category.LATEST_JOB, 'Railway', 'New'),
  ...generateMocks(15, Category.ADMIT_CARD, 'SSC', 'Download'),
  ...generateMocks(15, Category.RESULT, 'UPPRPB', 'Check'),
  ...generateMocks(12, Category.ADMISSION, 'NTA', 'CUET'),
  ...generateMocks(10, Category.ANSWER_KEY, 'UPSC', 'Final'),
  ...generateMocks(10, Category.SYLLABUS, 'BPSC', 'Exam'),
  ...generateMocks(10, Category.BIHAR_SPECIAL, 'BSEB', 'Bihar'),
  ...generateMocks(8, Category.SSC_CAREERS, 'SSC', 'CGL'),
  ...generateMocks(8, Category.UPSC_NOTIFICATIONS, 'UPSC', 'IAS'),
  ...generateMocks(8, Category.RAILWAY, 'RRB', 'ALP'),
  ...generateMocks(8, Category.BANKING_JOBS, 'SBI', 'PO'),
  ...generateMocks(8, Category.STATE_POLICE, 'UPP', 'Constable'),
];
