import { Router } from 'express';
import MapsController from '@controllers/maps.controller';
import { Routes } from '@interfaces/routes.interface';
import gAuthMiddleware from '@middlewares/gAuth.middleware';

class MapsRoute implements Routes {
  public path = '/api/maps/';
  public router = Router();
  public mapsController = new MapsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //controllo pagamento e aggiungo chiamate al totale chiamate fatte con middleware
    this.router.post(`${this.path}getPlaces`, gAuthMiddleware, this.mapsController.getPlaces);
  }
}

export default MapsRoute;
