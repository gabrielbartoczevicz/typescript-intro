import express from 'express'

import { createCourse } from './routes'

const app = express()

app.use(express.json())

app.post('/courses', createCourse)

app.listen(3333, () => console.log('Server started at :3333'))
