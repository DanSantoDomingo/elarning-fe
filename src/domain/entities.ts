export type Lesson = {
  readonly id: number;
  readonly slug: string;
  title: string;
  img?: string;
  explanation: string;
  example: string;
  questions: Array<Question>;
};

export type Question = {
  readonly id: number;
  text: string;
  options: Array<Option>;
};

export type Option = {
  readonly id: number;
  answer: string;
  isCorrect: boolean;
};

export default Lesson;
