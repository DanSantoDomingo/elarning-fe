import type { Question } from "@/domain/entities";
import type IQuestionService from "@/services/IQuestionService";

export class QuestionService implements IQuestionService {
  private baseUrl = '/api/v1/questions';

  public async getQuestions(lessonId: number): Promise<Array<Question>> {
    try {
      const response = await fetch(`${this.baseUrl}?lessonId=${lessonId}`);
      if (response.ok) {
        const questions = await response.json();
        return questions;
      } else {
        throw new Error('Failed to fetch questions');
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
