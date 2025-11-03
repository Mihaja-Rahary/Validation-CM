import { GoogleGenAI, Type } from '@google/genai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// La clé API est lue en toute sécurité depuis les variables d'environnement de Vercel
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        id: { type: Type.STRING },
        topic: { type: Type.STRING },
        type: { type: Type.STRING },
        text: { type: Type.STRING },
        options: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        },
        correctAnswer: { type: Type.STRING },
        explanation: { type: Type.STRING },
      },
      required: ['id', 'topic', 'type', 'text', 'explanation']
    },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { topic, sopContent } = req.body;
    if (!topic || !sopContent) {
      return res.status(400).json({ error: 'Missing topic or sopContent in request body' });
    }

    const prompt = `
    You are an expert instructional designer creating an interactive training quiz in French for Community Managers.
    Based on the following Standard Operating Procedure (SOP) text, generate a quiz with 10 unique and diverse questions.
    SOP Content:
    ---
    ${sopContent}
    ---
    Instructions:
    1.  Create exactly 10 questions. The questions should be in French.
    2.  The questions must be different and reformulated each time you generate them. Do not simply copy phrases from the text. Test for understanding, not just memory.
    3.  Include a mix of question types: 'qcm' (multiple choice), 'open' (requires a written answer), and 'closed' (Yes/No or True/False style).
    4.  For 'qcm' and 'closed' questions, you MUST provide the 'options' and 'correctAnswer' fields.
    5.  For 'open' questions, you MUST OMIT the 'options' and 'correctAnswer' fields.
    6.  For EVERY question, provide a detailed 'explanation'. For 'open' questions, this explanation should serve as the model answer. For others, it should explain why the correct answer is right.
    7.  The 'id' for each question must be a unique string, for example 'q1', 'q2', etc.
    8.  The 'topic' field for every question must be exactly: "${topic}".
    9. Your response must be a valid JSON array of objects that adheres to the provided schema.
    `;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: responseSchema,
            temperature: 0.8,
        },
    });
    
    const jsonText = response.text.trim();
    const questions = JSON.parse(jsonText);
    
    return res.status(200).json(questions);

  } catch (error) {
    console.error('Error in serverless function:', error);
    return res.status(500).json({ error: 'Failed to generate quiz questions.' });
  }
}
