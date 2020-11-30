import { Request, Response } from 'express'
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '../../typeorm/repositories/UserRepository';

export default class SectionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

  const usersRepository = new UsersRepository();

  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return res.json({ user, token });
  }
}
