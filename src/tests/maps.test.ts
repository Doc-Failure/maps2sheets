import Maps from '@services/maps.service';

interface resultSchema {
  results: [];
  status: string;
}

describe('Testing Google APIs integrations', () => {
  describe('Maps Apis Unit Test', () => {
    it('Maps search places by text query', async () => {
      const mapsConsumer: Maps = new Maps();
      const res: resultSchema = JSON.parse(await mapsConsumer.place_text_search('Italian restaurant in Newyork'));
      expect(res.status).toBe('OK');
    });
  });
});
