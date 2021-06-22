import { Request, Response } from 'express';

import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {

   async handle(req: Request, res: Response) {
      const createUserService = new CreateUserService();

      const { name, email, admin } = req.body;

      const user = await createUserService.execute({ name, email, admin });

      return res.json(user);
   };
};

export { CreateUserController };
