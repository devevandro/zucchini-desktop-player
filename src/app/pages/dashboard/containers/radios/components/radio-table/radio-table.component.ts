import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { State } from '@models/state.interface';
import { Radio } from '@models/radio.interface';

@Component({
  selector: 'app-radio-table',
  templateUrl: './radio-table.component.html',
  styleUrls: ['./radio-table.component.scss']
})
export class RadioTableComponent implements OnInit {
  public state: State;
  public radios: Radio[] = [];
  public radio: Radio;
  public stateName = '';
  public audioObj = new Audio();
  public radioPlaying = '';
  public isPlaying = false;
  public isMute = false;
  public volume = 50;

  constructor(
    private router: Router,
    private location: Location,
  ) { }

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
    this.radio =  radio;
    const { url } = radio;
    this.audioObj.src = url;
    this.audioObj.play();
    this.radioPlaying = url;
    this.isPlaying = true;
  }

  handlePause(): void {
    this.audioObj.pause();
    this.radioPlaying = '';
    this.isPlaying = false;
  }

  handleUp(): void {
    this.audioObj.play();
    this.audioObj.volume = 1;
    this.isMute = false;
    this.volume = 50;
  }

  handleMute(): void {
    this.audioObj.volume = 0;
    this.isMute = true;
    this.volume = 0;
  }

  onBack(): void {
    this.audioObj.pause();
    this.radioPlaying = '';
    this.location.back();
  }

  setVolume(): void {
    this.audioObj.volume = this.volume;

    if (this.volume === 0) {
      this.isMute = true;
    } else {
      this.isMute = false;
    }
  }
}
