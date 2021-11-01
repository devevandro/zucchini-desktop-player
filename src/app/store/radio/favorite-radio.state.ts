import { Injectable } from '@angular/core';
import { FavoriteRadio } from '@models/favorite-radio.interface';

import { Action, Actions, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { FavoriteService } from '@pages/dashboard/containers/radios/services/favorite.service';

import { FavoriteRadioModel } from './favorite-radio-model.interface';
import { CreateFavoriteRadio, LoadRequestFavoriteRadios, RemoveFavoriteRadio } from './favorite-radio.actions';

@State<FavoriteRadioModel>({
  name: 'favorite',
  defaults: {
    favoriteRadios: undefined
  }
})
@Injectable()
export class FavoriteRadioState {
  @Selector()
  static getFavoriteRadios({ favoriteRadios }: FavoriteRadioModel): FavoriteRadio[] {
    return favoriteRadios;
  }

  static getFavoriteRadioByURL(url: string): any {
    return createSelector([FavoriteRadioState.getFavoriteRadios], (state: FavoriteRadio[]) => {
      return state.filter(radio => radio.url === url);
    });
  }

  constructor(private favoriteRadioService: FavoriteService) {}

  @Action(LoadRequestFavoriteRadios)
  async loadRequest({ patchState }: StateContext<FavoriteRadioModel>): Promise<void> {
    const favoriteRadios = await this.favoriteRadioService.getAllFavorites();

    patchState({ favoriteRadios });
  }

  @Action(CreateFavoriteRadio)
  // tslint:disable-next-line: typedef
  async createFavoriteRadio({ getState, patchState }: StateContext<FavoriteRadioModel>, { favorite }: CreateFavoriteRadio) {
    const newFavoriteRadio = await this.favoriteRadioService.storeFavorites(favorite);

    if (!newFavoriteRadio) {
      return;
    }

    const newFavoite = getState().favoriteRadios.concat(newFavoriteRadio);

    patchState({ favoriteRadios: newFavoite});
  }

  @Action(RemoveFavoriteRadio)
  // tslint:disable-next-line: typedef
  async removeFavoriteRadio({ getState, patchState}: StateContext<FavoriteRadioModel>, { favoriteId }: RemoveFavoriteRadio) {
    const wasDelete = await this.favoriteRadioService.removeFavoriteRadio(favoriteId);

    if (!wasDelete) {
      return;
    }

    const favoriteDeleted = getState().favoriteRadios.filter(favorite => favorite.id !== favoriteId);
    patchState({ favoriteRadios: favoriteDeleted });
  }
}
