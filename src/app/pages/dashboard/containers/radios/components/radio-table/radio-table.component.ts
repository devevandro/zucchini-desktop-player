import { Component, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngxs/store';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import { Radio } from '@models/radio.interface';
import { FavoriteRadioState } from '@store/radio/favorite-radio.state';
import { RadioPlayService } from 'src/app/providers/radio-play.service';
import { LoadRequestFavoriteRadios } from '@store/radio/favorite-radio.actions';
import { UtilsService } from 'src/app/providers/utils.service';
import { Notification } from '@models/notification.interface';

@Component({
  selector: 'app-radio-table',
  templateUrl: './radio-table.component.html',
  styleUrls: ['./radio-table.component.scss'],
})
export class RadioTableComponent implements OnInit {
  @Input() datas = [];

  public state;
  public radios: Radio[] = [];
  public radio: Radio;
  public stateName = '';
  public isPlaying = false;
  public isMute = false;
  public volume = 30;
  public color = '#474a51';
  public searchValue = '';
  public visible = false;
  public listOfDisplayData = [...this.datas];
  public radiosIsFavorite = false;
  public favoriteValues: Observable<any[]>;
  public favorites: any[];

  constructor(
    private store: Store,
    private router: Router,
    private location: Location,
    private radioPlay: RadioPlayService,
    private db: AngularFireDatabase,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadRequestFavoriteRadios());

    if (this.datas === undefined) {
      this.router.navigate(['/radios-favoritas']);
    } else {
      if (this.datas) {
        this.state = this.datas;
        const { content, name } = this.state;
        this.radios = content;
        this.stateName = name;
      }
    }

    this.reset();

    const ref = this.db.list('favorites-radios');
    this.favoriteValues = ref.valueChanges();
    this.favoriteValues.subscribe((resp) => {
      this.favorites = resp;
    });
  }

  handlePlay(radio: Radio = this.radio): void {
    if (!radio) {
      const notification = {
        type: 'warning',
        title: 'Escolha uma rádio!',
      } as Notification;

      this.utilsService.notificationToast(notification);
    }

    this.radio = radio;
    this.radioPlay.play(radio);
    this.isPlaying = true;
  }

  handlePause(): void {
    this.radioPlay.pause();
    this.isPlaying = false;
  }

  handleUp(): void {
    this.radioPlay.up();
    this.isMute = false;
    this.volume = 30;
  }

  handleMute(): void {
    this.radioPlay.mute();
    this.isMute = true;
    this.volume = 0;
  }

  onBack(): void {
    this.radioPlay.pause();

    if (this.radio) {
      this.radio.url = '';
    }
    this.location.back();
  }

  setVolume(volume: number = this.volume): void {
    this.radioPlay.setVolume(volume);

    if (this.volume === 0) {
      this.isMute = true;
    } else {
      this.isMute = false;
    }
  }

  handleAddFavorite(radio: Radio = this.radio): void {
    let notification = {} as Notification;

    if (!radio) {
      notification = {
        type: 'warning',
        title: 'Escolha uma rádio!',
      };
    } else {
      const ref: AngularFireList<any> = this.db.list(`favorites-radios`);
      ref.push({
        ...radio,
      })
      .then((value) => {
        notification = {
          type: 'success',
          title: 'Rádio adicionada com sucesso!!',
        } as Notification;

        value.get().then(keys => {
          ref.update(`${keys}`, { key: keys });
        });
        })
        .catch(() => {
          notification = {
            type: 'warning',
            title: `${'Erro ao adicionar a rádio ' + radio?.name + ' aos favoritos!'}`,
          };
        }).finally(() => {
          this.utilsService.notificationToast(notification);
        });
    }
  }

  handleRemoveFavorite(radio: Radio = this.radio): void {
    const ref: AngularFireList<any> = this.db.list(`favorites-radios`);
    let notification = {} as Notification;

    if (this.favorites) {
      this.favorites.forEach(value => {
        if (value?.url === this.radio.url) {
          ref.remove(`${value?.key}`).then(() => {
            notification = {
              type: 'success',
              title: 'Rádio removida dos favoritos!',
            };
          }).catch(() => {
            notification = {
              type: 'success',
              title: `${'Erro ao remover a rádio ' + radio?.name + ' aos favoritos!'}`,
            };
          }).finally(() => {
            this.utilsService.notificationToast(notification);
          });
        }
      });
    }
  }

  handleFavorite(url: string): boolean {
    const favoriteRadios = this.store.dispatch(
      FavoriteRadioState.getFavoriteRadioByURL(url)
    );

    if (favoriteRadios) {
      return true;
    } else {
      return false;
    }
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.datas.filter(
      (item) =>
        // item.name.indexOf(this.searchValue.toLowerCase) !== -1
        item?.name?.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        item?.city?.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
