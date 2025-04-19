import { findUserByEmail } from '../../utils/user/find-by-mail'
import { verifyPassword } from '../../utils/user/password-hashing'
import { userLoginTypes } from '../../utils/user/user-types'

export const userLogin = async (userData: userLoginTypes) => {
  const user = await findUserByEmail(`${userData.email}`, {
    id: true,
    email: true,
    userName: true,
    fullName: true,
    password: true,
  })

  if (!user || !(await verifyPassword(userData.password, user.password))) {
    return null
  }

  const { password, ...safeUser } = user
  return safeUser
}
