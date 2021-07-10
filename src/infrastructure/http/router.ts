import express from 'express'

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  const result = {
    status: 'success',
    envType: process.env.ENV_TYPE
  }
  res.json(result)
})

export default router