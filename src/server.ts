import express from 'express'

const app = express()

app.get('/', (_, response) => {
  return response.json({ message: 'Henlo World with Typescript' })
})

app.listen(3333, () => console.log('Server started at :3333'))
