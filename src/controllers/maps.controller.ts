import { NextFunction, Request, Response } from 'express';
/* import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface'; */
/* import userService from '@services/users.service'; */

class MapsController {
  /* public userService = new userService(); */

  public getPlaces = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      /*   const findAllUsersData: User[] = await this.userService.findAllUser();
       */

      res.status(200).json({ data: 'data', message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default MapsController;
