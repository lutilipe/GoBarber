import { Request, Response } from 'express'
import CreateUserService from '@modules/users/services/CreateUserService';
import UsersRepository from '../../typeorm/repositories/UserRepository';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const usersRepository = new UsersRepository();

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return res.json(user);
  }
}
