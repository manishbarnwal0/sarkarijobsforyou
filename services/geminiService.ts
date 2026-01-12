import { GoogleGenAI } from "@google/genai";

// Standard way to access environment variables in the provided environment
const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getJobSummary = async (jobTitle: string) => {
  if (!apiKey) return "";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Updated to a stable available model name
      contents: `Provide a concise, trust-building summary (2-3 sentences) for a Sarkari job notification titled: "${jobTitle}". Highlight why this is a good opportunity for candidates. Format it for an Indian audience.`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Error fetching summary from Gemini:", error);
    return "";
  }
};

export const getCareerAdvice = async (query: string) => {
  if (!apiKey) return "API Key not configured.";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
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