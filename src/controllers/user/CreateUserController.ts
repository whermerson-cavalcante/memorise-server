import { Request, Response } from 'express'

import { CreateUserService } from '../../services/user/CreateUserService'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const service = new CreateUserService()

      const { 
        name,
        username,
        email,
        password,
        confirm_password
      } = request.body;

      const user = await service.execute({
        name,
        username,
        email,
        password,
        confirm_password
      });

      return response.status(201).json(user)

    } catch(err) {
      return response.status(400).json({ error: err.message })
    }
  }
}