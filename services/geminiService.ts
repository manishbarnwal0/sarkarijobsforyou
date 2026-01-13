import { GoogleGenAI } from "@google/genai";

// Initialize the API with the key from environment variables
// Always use new GoogleGenAI({apiKey: process.env.API_KEY})
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getJobSummary = async (jobTitle: string) => {
  if (!process.env.API_KEY) return "";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a concise, trust-building summary (2-3 sentences) for a Sarkari job notification titled: "${jobTitle}". Highlight why this is a good opportunity for candidates. Format it for an Indian audience.`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Error fetching summary from Gemini:", error);
    return "";
  }
};

export const getCareerAdvice = async (query: string) => {
  if (!process.env.API_KEY) return "Career advice is currently unavailable. Please check your configuration.";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are an expert career counselor specialized in Indian Government Jobs (Sarkari Naukri). Provide accurate, helpful, and professional advice about SSC, UPSC, Banking, Railway, and State Government exams. Keep answers concise and structured.",
      }
    });
    return response.text || "I am currently unable to provide advice.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently unable to provide advice. Please try again later.";
  }
};