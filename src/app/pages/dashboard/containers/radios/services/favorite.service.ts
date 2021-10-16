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

  async getAllFavorites(): Promise<any> {
    try {
      const favorite = await this.get<{ favorites: FavoriteRadio[]; }>();
      return favorite.favorites;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async storeFavorites(favoriteRadios: FavoriteRadio): Promise<any> {
    try {
      const newFavoriteRadio = await this.post(favoriteRadios);
      alert('adicionado');
      return newFavoriteRadio;
    } catch (e) {
      return;
    }
  }

  async removeFavoriteRadio(favoriteRadioId: string): Promise<any> {
    try {
      await this.delete(`/${favoriteRadioId}`);
      return true;
    } catch (e) {
      return false;
    }
  }
}
