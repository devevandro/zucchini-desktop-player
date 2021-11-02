import { Component, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngxs/store';

import { Radio } from '@models/radio.interface';
import { FavoriteRadioState } from '@store/radio/favorite-radio.state';
import { RadioPlayService } from 'src/app/providers/radio-play.service';
import { CreateFavoriteRadio, LoadRequestFavoriteRadios } from '@store/radio/favorite-radio.actions';

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

  constructor(
    private store: Store,
    private router: Router,
    private location: Location,
    private radioPlay: RadioPlayService
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
  }

  handlePlay(radio: Radio = this.radio): void {
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
    this.store.dispatch(new CreateFavoriteRadio(radio));
  }

  handleFavorite(url: string): boolean {
    const favoriteRadios = this.store.dispatch(FavoriteRadioState.getFavoriteRadioByURL(url));

    if (favoriteRadios) {
      return true;
    } else {
      return false;
    }
  }
}
