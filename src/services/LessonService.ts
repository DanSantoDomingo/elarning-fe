import type { Lesson } from "@/domain/entities";
import type ILessonService from "@/services/ILessonService";
import lessons from "@/domain/lessons.json";

export class FileBasedLessonService implements ILessonService {
  public async getLesson(slug: string): Promise<Lesson | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lesson = lessons.find((t) => t.slug === slug) as Lesson;
        resolve(lesson);
      }, 500);
    });
  }

  public async getLessons(): Promise<Array<Lesson>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lessonsList = lessons as Lesson[];
        resolve(lessonsList);
      }, 500);
    });
  }
}
