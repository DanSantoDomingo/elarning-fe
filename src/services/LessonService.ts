import type { Lesson } from "@/domain/entities";
import type ILessonService from "@/services/ILessonService";
import lessons from "@/domain/lessons.json";



export class APILessonService implements ILessonService {
  private baseUrl = '/api/v1/lessons';

  public async getLesson(slug: string): Promise<Lesson | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}/${slug}`);
      if (response.ok) {
        const lesson = await response.json();
        return lesson;
      } else {
        throw new Error(`Failed to fetch lesson with slug: ${slug}`);
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  public async getLessons(): Promise<Array<Lesson>> {
    try {
      const response = await fetch(this.baseUrl);
      if (response.ok) {
        const lessons = await response.json();
        return lessons;
      } else {
        throw new Error('Failed to fetch lessons');
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}