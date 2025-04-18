import { Router } from "express"

import { categoriesController } from "../controllers/api/categories-controller"
import { userCategoriesController } from "../controllers/api/user-categories-controller"
import { userController } from "../controllers/api/users-controllers"

const protectedRoutes = Router()
protectedRoutes.post('/categories', categoriesController)
protectedRoutes.get('/friends', userController)
protectedRoutes.post('/usercats', userCategoriesController)

export { protectedRoutes }