import Maps from '@services/maps.service';
import { CreateGUserDto } from '@dtos/gUsers.dto';
import MapsRoute from '@routes/maps.route';
import { createConnection, getConnection, Repository } from 'typeorm';
import App from '@/app';
import request from 'supertest';
import { dbConnection } from '@databases';
import { mapsResultSchema } from '@interfaces/maps.interface';

beforeAll(async () => {
  await createConnection(dbConnection);
});

afterAll(async () => {
  await getConnection().close();
});

describe('Testing Google APIs integrations', () => {
  describe('Maps Apis Unit Test', () => {
    it('Maps search places by text query', async () => {
      const mapsConsumer: Maps = new Maps();
      const res: mapsResultSchema = await mapsConsumer.placeTextSearch('Italian restaurant in Newyork');
      expect(res.status).toBe('OK');
    });
  });

  describe('[POST] /api/maps/getPlaces', () => {
    it('response Create user', async () => {
      const gUserData: CreateGUserDto = {
        email: 'test@gmail.com',
      };

      const formData = {
        text_query: 'Italian restaurant in New York',
        user: gUserData,
      };

      const mapsRoute = new MapsRoute();
      const app = new App([mapsRoute]);
      return request(app.getServer()).post(`${mapsRoute.path}getPlaces`).send(formData).expect(200);
    });
  });
});
