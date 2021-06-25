import { Request, Response } from "express";

import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController {

   async handle(req: Request, res: Response) {
      const createComplimentService = new CreateComplimentService();

      const { message, tag_id, user_receiver } = req.body;
      const { user_id } = req;

      const compliment = await createComplimentService.execute({
         message,
         tag_id,
         user_sender: user_id,
         user_receiver
      });

      return res.json(compliment);
   };
};

export { CreateComplimentController };
