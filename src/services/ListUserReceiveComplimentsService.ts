import { getCustomRepository } from "typeorm";

import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserReceiveComplimentsService {

   async execute(user_id: string) {
      const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

      const compliments = await complimentsRepositories.find({
         where: {
            user_receiver: user_id
         },
         relations: ['userSender', 'userReceiver', 'tag']
      });

      const complimentsAdjusted = compliments.map(item => {
         return {
            from: item.userSender.name,
            to: item.userReceiver.name,
            tag: item.tag.name,
            message: item.message,
            created_at: item.created_at
         };
      });

      return complimentsAdjusted;
   };
};

export { ListUserReceiveComplimentsService };
