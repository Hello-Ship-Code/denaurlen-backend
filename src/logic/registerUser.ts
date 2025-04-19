import { prisma } from '../config/database'
import { toLowerCase } from '../lib/toLowersCase'
import { hashPassword } from '../lib/user/hashPassword'

import { UserSignupPayload } from '../types/auth.types'

export const userSignup = async (userData: UserSignupPayload) => {
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
