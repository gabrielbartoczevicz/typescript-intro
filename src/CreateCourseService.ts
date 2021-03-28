interface Course {
  id?: string;
  name: string;
  duration: number;
  educator: string;
}

export class CreateCourseService {
  public execute(toCreateCourse: Course): Course {
    toCreateCourse.id = Date.now().toString()

    return toCreateCourse
  }
}