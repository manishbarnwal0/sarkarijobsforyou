import { GoogleGenAI } from "@google/genai";

export const getJobSummary = async (jobTitle: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "";
  
  try {
    const ai = new GoogleGenAI({ apiKey });
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
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "Career advice is currently unavailable. Please check your configuration.";
  
  try {
    const ai = new GoogleGenAI({ apiKey });
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