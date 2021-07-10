import express from 'express'

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  const result = {
    status: 'success'
  }
  res.json(result)
})

export default router