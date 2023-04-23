import type { Question } from "@/domain/entities";

export default interface IQuestionService {
  getQuestions(lessonId: number): Promise<Array<Question>>;
}
