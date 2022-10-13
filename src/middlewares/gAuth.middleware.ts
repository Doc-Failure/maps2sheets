import { NextFunction, Response } from 'express';
import { UserEntity } from '@entities/users.entity';
import UserService from '@services/users.service';
import { HttpException } from '@exceptions/HttpException';
import { RequestWithUser } from '@interfaces/auth.interface';
import { CreateGUserDto } from '@/dtos/gUsers.dto';

const gAuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    let findUser = await UserEntity.findOne({ where: { email: req.body.user.email } });
    if (!findUser) {
      const userService = new UserService();

      const userData: CreateGUserDto = { email: req.body.user.email };
      await userService.createGUser(userData);
      findUser = await UserEntity.findOne({ where: { email: req.body.user.email } });
    }
    if (!findUser) {
      next(new HttpException(401, 'Wrong authentication token'));
    }
    req.user = findUser;
    next();
  } catch (error) {
    next(error);
  }
};

export default gAuthMiddleware;
