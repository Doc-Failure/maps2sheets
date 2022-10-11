import { HttpException } from '@exceptions/HttpException';
import { mapsResultSchema } from '@interfaces/maps.interface';
import { GOOGLE_MAPS_KEY } from '@/config';
import axios from 'axios';

class Maps {
  public async placeTextSearch(text_query: string): Promise<mapsResultSchema> {
    let result: mapsResultSchema = null;
    const queryUrl: string =
      'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + encodeURIComponent(text_query) + '&key=' + GOOGLE_MAPS_KEY;
    try {
      const { data } = await axios.get(queryUrl);
      result = data;
    } catch (error) {
      throw new HttpException(500, `place_text_search: ${text_query} was not found.  ${error}`);
    }
    return result;
  }
}

export default Maps;
