import { Router } from "express"

import { loginController } from "../controllers/api/login-controller"
import { signupController } from "../controllers/api/signup-controller"

const apiRouters = Router()

apiRouters.post('/signup', signupController)
apiRouters.post('/login', loginController)

export { apiRouters }