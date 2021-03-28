import { Request, Response } from 'express'

import { CreateCourseService } from './CreateCourseService'

const createCourseService = new CreateCourseService()

export function createCourse(request: Request, response: Response): Response<any> {
  const { name, duration, educator } = request.body

  const course = createCourseService.execute({ 
    name, 
    duration, 
    educator
  })

  const anotherCourse = createCourseService.execute({
    name, 
    educator
  })

  return response.json({
    course, 
    anotherCourse
  })
}