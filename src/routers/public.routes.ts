import { Router } from 'express'

import { categoriesController } from '../controllers/user/category.controller'
import { loginController } from '../controllers/user/login.controller'
import { signupController } from '../controllers/user/signup.controller'

const apiRouters = Router()

apiRouters.post('/signup', signupController)
apiRouters.post('/login', loginController)
apiRouters.post('/categories', categoriesController)

export { apiRouters }
