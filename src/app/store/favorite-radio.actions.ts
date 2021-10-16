import { FavoriteRadio } from '@models/favorite-radio.interface';

export class LoadRequestFavoriteRadios {
  static readonly type = '[FavoriteRadio] load request';
}

export class CreateFavoriteRadio {
  static readonly type = '[FavoriteRadio] create new favorite';
  constructor(public favorite: FavoriteRadio) {}
}

export class RemoveFavoriteRadio {
  static readonly type = '[FavoriteRadio] remove favorite';
  constructor(public favoriteId: string) {}
}
