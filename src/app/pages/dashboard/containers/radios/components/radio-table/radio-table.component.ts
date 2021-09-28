import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  public stateName = '';

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
        console.log(this.radios);
      }
    }
  }

  handlePlay(radio: Radio): void {
    console.log(radio);
  }

  handleBack(): void {
    this.location.back();
  }
}
