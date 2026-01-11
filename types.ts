
export enum Category {
  LATEST_JOB = 'latest-jobs',
  ADMIT_CARD = 'admit-card',
  RESULT = 'results',
  SYLLABUS = 'syllabus',
  ANSWER_KEY = 'answer-key',
  ADMISSION = 'admission',
  BIHAR_SPECIAL = 'bihar-board-specials',
  FEATURED_UPDATES = 'featured-educational-updates',
  SSC_CAREERS = 'ssc-careers',
  UPSC_NOTIFICATIONS = 'upsc-notifications',
  RAILWAY = 'railway',
  BANKING_JOBS = 'banking-jobs',
  STATE_POLICE = 'state-police-recruitment',
  SCHOLARSHIP = 'scholarship',
  UP_SCHOLARSHIP = 'up-scholarship'
}

export const CategoryDisplayNames: Record<Category, string> = {
  [Category.LATEST_JOB]: 'Latest Jobs',
  [Category.ADMIT_CARD]: 'Admit Card',
  [Category.RESULT]: 'Results',
  [Category.SYLLABUS]: 'Syllabus',
  [Category.ANSWER_KEY]: 'Answer Key',
  [Category.ADMISSION]: 'Admission',
  [Category.BIHAR_SPECIAL]: 'Bihar Board Specials',
  [Category.FEATURED_UPDATES]: 'Featured Educational Updates',
  [Category.SSC_CAREERS]: 'SSC Careers',
  [Category.UPSC_NOTIFICATIONS]: 'UPSC Notifications',
  [Category.RAILWAY]: 'Railway (RRB/RRC)',
  [Category.BANKING_JOBS]: 'Banking Jobs (IBPS, SBI)',
  [Category.STATE_POLICE]: 'State Police Recruitment',
  [Category.SCHOLARSHIP]: 'Scholarship',
  [Category.UP_SCHOLARSHIP]: 'UP Scholarship'
};

export interface JobPost {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  category: Category; // In a real app, this would be Category[]
  postDate: string;
  lastDate: string;
  organization: string;
  totalPosts: number;
  tags: string[];
  link: string;
  content?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}
