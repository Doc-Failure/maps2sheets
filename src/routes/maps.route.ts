import { Router } from 'express';
import MapsController from '@controllers/maps.controller';
/* import { CreateUserDto } from '@dtos/users.dto'; */
import { Routes } from '@interfaces/routes.interface';
/* import authMiddleware from '@middlewares/auth.middleware'; */
/* import validationMiddleware from '@middlewares/validation.middleware'; */

class MapsRoute implements Routes {
  public path = '/api/maps/';
  public router = Router();
  public mapsController = new MapsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //middleware authMiddleware
    this.router.post(`${this.path}getPlaces`, this.mapsController.getPlaces);
  }
}

export default MapsRoute;
