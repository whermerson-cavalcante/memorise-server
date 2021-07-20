import { Router } from 'express'
import { userRouter } from './user.routes'

export const appRouter = Router()

appRouter.use("/users", userRouter)