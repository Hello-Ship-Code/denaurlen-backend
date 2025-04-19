import { Router } from 'express'

import { getUserCategoriesController } from '../controllers/user/getUserCategories.controller'
import { getUsersController } from '../controllers/user/getUsers.controller'
import { userCategoriesController } from '../controllers/user/userCategories.controller'

const privateRoutes = Router()

privateRoutes.get('/friends', getUsersController)
privateRoutes.post('/user-categories', userCategoriesController)
privateRoutes.get('/get-user-cats', getUserCategoriesController)

export { privateRoutes }