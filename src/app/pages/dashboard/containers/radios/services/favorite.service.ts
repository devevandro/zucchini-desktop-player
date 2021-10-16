import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/providers/http.service';
import { FavoriteRadio } from '@models/favorite-radio.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService extends HttpService {

  constructor(httpCliente: HttpClient) {
    super('radio-favorite', httpCliente);
  }

  getAllFavorites(): Promise<any> {
    return this.get<{ favorites: FavoriteRadio[] }>()
      .then(favorite => {
        return favorite.favorites;
      })
      .catch((e) => {
        console.log(e);
        return [];
      });
  }

  storeFavorites(favoriteRadios: FavoriteRadio): Promise<any> {
    return this.post(favoriteRadios)
      .then((newFavoriteRadio: { favorite: FavoriteRadio }) => {
        alert('adicionado');
        const {favorite } = newFavoriteRadio;

        return favorite;
      }).catch(() => {
        return;
      });
  }

  removeFavoriteRadio(favoriteRadioId: string): Promise<any> {
    return this.delete(`/${favoriteRadioId}`)
    .then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }
}
