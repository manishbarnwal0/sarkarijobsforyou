// @google/genai dependency removed to fix build error. 
// Gemini services are mocked for now.

export const getJobSummary = async (jobTitle: string) => {
  return `This is an excellent opportunity for candidates seeking a stable career in ${jobTitle}. High growth potential and job security included.`;
};

export const getCareerAdvice = async (query: string) => {
  return "Expert career counseling is currently being updated. Please check back later for professional advice on SSC, UPSC, and Banking exams.";
};