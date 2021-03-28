interface Course {
  id?: string;
  name: string;
  duration?: number;
  educator: string;
}

export class CreateCourseService {
  public execute({ name, educator, duration = 2 }: Course): Course {
    const createdCourse: Course = {
      id: Date.now().toString(),
      name,
      educator,
      duration,
    }

    return createdCourse
  }
}