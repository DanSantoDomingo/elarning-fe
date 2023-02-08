import type { Lesson } from "@/domain/entities";

export default interface ILessonService {
  getLessons(): Promise<Array<Lesson>>;
  getLesson(slug: string): Promise<Lesson | undefined>;
}
