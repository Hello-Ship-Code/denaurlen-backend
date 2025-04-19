import type { Response, Express } from 'express'

import { privateRoutes } from './private.routes'
import { apiRouters } from './public.routes'
import { authMiddleware } from '../middlewares/auth'

const appRouter = (app: Express) => {
  app.use('/user', authMiddleware, privateRoutes)
  app.use('/api', apiRouters)
  app.use((_, response: Response) => {
    response.redirect('/')
  })
}

export { appRouter }
