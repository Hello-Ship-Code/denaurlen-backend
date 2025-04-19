import { RequestHandler } from 'express'

export const getUserCategoriesController: RequestHandler = (_req, res, next) => {
  try {
    const user = res.locals.user

    res.json({ user: user })
  } catch (e) {
    next(e)
  }
}