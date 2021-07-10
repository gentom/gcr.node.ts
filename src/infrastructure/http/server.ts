import express from 'express'
import cors from 'cors'
import router from './router'

const server = (): void => {
  const PORT = process.env.PORT || 8080
  const app = express()
  app.use(cors())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use('/v1', router)
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })
}

export default server