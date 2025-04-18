import type { Request, RequestHandler, Response } from 'express'

import { userValidation } from '../../validation/user/user-validation'

import HttpError from '../../utils/HttpError'
import { userSignupTypes } from '../../utils/user/user-types'
import { userSignup } from '../services/user-signup'

export const signupController: RequestHandler = (req: Request, res: Response) => {
  try {
    const userData: userSignupTypes = userValidation.parse(req.body)

    if (!userData) throw new HttpError(`where's the data man come on!!!`, 404)

    userSignup(userData)

    res.status(200).json({
      message: "user signup success"
    })

  } catch (error) {
    throw new HttpError(`${error}`, 503)
  }
}