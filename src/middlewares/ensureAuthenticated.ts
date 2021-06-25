import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
   sub: string;
};

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
   const authToken = req.headers.authorization;

   if (!authToken) {
      return res.status(401).end();
   }

   const [, token] = authToken.split(' ');

   try {
      const { sub } = verify(token, process.env.AUTH_SECRET) as IPayload;

      req.user_id = sub;

      return next();

   } catch (e) {
      return res.status(401).end();
   }
};
