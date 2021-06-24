import { Request, Response } from "express";

import { AuthenticationUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {

   async handle(req: Request, res: Response) {
      const authenticateUserService = new AuthenticationUserService();

      const { email, password } = req.body;

      const token = await authenticateUserService.execute({ email, password });

      return res.json({ token });
   };
};

export { AuthenticateUserController };
