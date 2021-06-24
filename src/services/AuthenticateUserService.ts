import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UsersRepositories } from '../repositories/UsersRepositories';

interface IAuthenticateRequest {
   email: string;
   password: string;
};

class AuthenticationUserService {

   async execute({ email, password }: IAuthenticateRequest) {
      const usersRepositories = getCustomRepository(UsersRepositories);

      const user = await usersRepositories.findOne({ email });

      if (!user) {
         throw new Error('Email/Password incorrect');
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
         throw new Error('Email/Password incorrect');
      }

      const payload = {
         name: user.name,
         email: user.email,
      };

      const token = sign(
         payload,
         process.env.AUTH_SECRET,
         {
            subject: user.id,
            expiresIn: '1d'
         });


      return token;
   };
};

export { AuthenticationUserService };
