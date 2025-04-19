import { prisma } from '../../config/db.config'

import { hashPassword } from '../../utils/user/password-hashing'
import { toLowerCase } from '../../utils/user/to-lower-case'
import { userSignupTypes } from '../../utils/user/user-types'

export const userSignup = async (userData: userSignupTypes) => {
  return prisma.user.create({
    data: {
      email: userData.email,
      fullName: toLowerCase(userData.fullName),
      userName: toLowerCase(userData.userName),
      location: userData.location,
      gender: userData.gender,
      dob: userData.dob,
      password: await hashPassword(userData.password),
      otp: 1234,
      terms: userData.terms,
      wallet: {
        create: {},
      },
    },
  })
}
