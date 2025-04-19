import type { Response, Express } from 'express'

// import { protectedRoutes } from './protected.routes'
// import { authMiddleware } from '../middlewares/auth-middleware'
import { apiRouters } from './api.routes'

const appRouter = (app: Express) => {
  // app.use('/user', authMiddleware, protectedRoutes)
  app.use('/api', apiRouters)
  app.use((_, response: Response) => {
    response.redirect('/')
  })
}

export { appRouter }
