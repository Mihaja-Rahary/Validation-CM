import type { Question } from '../types';

export async function generateQuizQuestions(topic: string, sopContent: string): Promise<Question[]> {
    try {
        const response = await fetch('/api/generate-quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topic, sopContent }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Network response was not ok');
        }

        const questions = await response.json();

        if (!Array.isArray(questions)) {
            throw new Error("Generated content is not an array.");
        }

        return questions as Question[];

    } catch (error) {
        console.error("Error fetching quiz from our API:", error);
        throw new Error("Failed to generate quiz questions.");
    }
}
