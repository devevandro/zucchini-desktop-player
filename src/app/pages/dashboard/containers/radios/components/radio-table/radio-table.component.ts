import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { State } from '@models/state.interface';
import { Radio } from '@models/radio.interface';
import { RadioPlayService } from 'src/app/services/radio-play.service';

@Component({
  selector: 'app-radio-table',
  templateUrl: './radio-table.component.html',
  styleUrls: ['./radio-table.component.scss'],
})
export class RadioTableComponent implements OnInit {
  public state: State;
  public radios: Radio[] = [];
  public radio: Radio;
  public stateName = '';
  public isPlaying = false;
  public isMute = false;
  public volume = 30;
  public color = '#474a51';

  constructor(
    private router: Router,
    private location: Location,
    private radioPlay: RadioPlayService
  ) {}

  ngOnInit(): void {
    const { datas } = history.state;

    if (datas === undefined) {
      this.router.navigate(['/regiao-sul']);
    } else {
      if (datas) {
        this.state = datas;
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
}
