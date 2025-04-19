import type { NextFunction, Request, RequestHandler, Response } from 'express'

import { setUser } from '../../utils/JWT/auth'
import { userLoginTypes } from '../../utils/user/user-types'
import { userLogin } from '../services/user-login'

export const loginController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData: userLoginTypes = req.body

    const requiredFields: (keyof userLoginTypes)[] = ['email', 'password']

    for (const field of requiredFields) {
      if (!userData[field]) {
        res.status(400).json({ error: `${field} is required for login` })
        return
      }
    }

    const user = await userLogin(userData)

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' })
      return
    }

    // res.cookie('userToken', setUser(user))
    const token = setUser(user)

    res.status(200).json({
      message: 'Login successful 🥳',
      token,
      user: {
        id: user.id,
        email: user.email,
        userName: user.userName,
      },
    })
  } catch (error) {
    next(error)
  }
}
