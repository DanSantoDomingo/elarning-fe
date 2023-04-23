export type Lesson = {
  readonly id: number;
  readonly slug: string;
  title: string;
  imageUrl?: string;
  content: string;
  strippedContent: string;
  hasQuiz: boolean;
  // example: string;
  // questions: Array<Question>;
};

export type Question = {
  readonly id: number;
  readonly lessonSlug: string;
  readonly lessonId: number;
  content: string;
  solution: string;
  choices: Array<QuestionChoice>;
};

export type QuestionChoice = {
  readonly id: number;
  content: string;
  isCorrect: boolean;
};

export default Lesson;
