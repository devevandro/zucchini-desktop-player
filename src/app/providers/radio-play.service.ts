import { Injectable } from '@angular/core';

import { Radio } from '@models/radio.interface';

@Injectable({
  providedIn: 'root',
})
export class RadioPlayService {
  public audioObj = new Audio();

  constructor() {}

  play(radio: Radio): void {
    const { url } = radio;
    this.audioObj.src = '';
    this.audioObj.src = url;
    this.audioObj.play();
  }

  pause(): void {
    this.audioObj.pause();
  }

  up(): void {
    this.audioObj.play();
    this.audioObj.volume = 1;
  }

  mute(): void {
    this.audioObj.volume = 0;
  }

  setVolume(volume: number): void {
    this.audioObj.volume = volume / 100;
  }
}
