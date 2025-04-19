import express from 'express'

import { env } from './config/env.config'
import { errorMiddleware } from './middlewares/error-middleware'

import { appRouter } from './routes/router'

const app = express()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

appRouter(app)

// global error handler
app.use(errorMiddleware)

// Server
app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}`))
