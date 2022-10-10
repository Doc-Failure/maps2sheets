/* import { EntityRepository, Repository } from 'typeorm'; */
/* import { CreateUserDto } from '@dtos/users.dto'; */
/* import { UserEntity } from '@entities/users.entity'; */
/* import { User } from '@interfaces/users.interface'; */
/* import { isEmpty } from '@utils/util'; */
import { HttpException } from '@exceptions/HttpException';
import { GOOGLE_MAPS_KEY } from '@/config';
import axios from 'axios';

class Maps {
  public async place_text_search(text_query: string): Promise<string> {
    let result: JSON = null;
    const queryUrl: string =
      'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + encodeURIComponent(text_query) + '&key=' + GOOGLE_MAPS_KEY;
    try {
      const { data } = await axios.get(queryUrl);
      result = data;
    } catch (error) {
      throw new HttpException(500, `place_text_search: ${text_query} was not found.  ${error}`);
    }
    return JSON.stringify(result);
  }
}

export default Maps;
