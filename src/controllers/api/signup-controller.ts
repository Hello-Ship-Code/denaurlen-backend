import type { NextFunction, Request, RequestHandler, Response } from 'express'

import { userValidation } from '../../validation/user/user-validation'

import { findUserByEmail } from '../../utils/user/find-by-mail'
import { userSignupTypes } from '../../utils/user/user-types'
import { userSignup } from '../services/user-signup'

export const signupController: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData: userSignupTypes = userValidation.parse(req.body)

    const existingUser = await findUserByEmail(`${userData.email}`)

    if (existingUser) {
      res.status(409).json({ message: '😬 user already exists' })
      return
    }

    const user = await userSignup(userData)

    res.status(200).json({
      message: 'user signup success',
      user,
    })
  } catch (error) {
    next(error)
  }
}
