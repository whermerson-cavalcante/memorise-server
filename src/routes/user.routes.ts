import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

import { CreateUserController } from '../controllers/user/CreateUserController'

const userController = new CreateUserController()

export const userRouter = Router()

userRouter.post("/", celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
    confirm_password: Joi.ref('password')
  })
}), userController.handle);