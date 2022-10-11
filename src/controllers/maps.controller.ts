import { NextFunction, Request, Response } from 'express';
import mapsService from '@services/maps.service';
import { mapsResultSchema } from '@interfaces/maps.interface';

class MapsController {
  public mapsService = new mapsService();

  public getPlaces = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const getPlacesService: mapsResultSchema = await this.mapsService.placeTextSearch(req.body.text_query);

      res.status(200).json(getPlacesService);
    } catch (error) {
      next(error);
    }
  };
}

export default MapsController;
