import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
    const { datas } = history.state;
    this.state = datas;
    const { content } = this.state;
    this.radios = content;
    console.log(this.radios);
  }

  handleBack(): void {
    this.location.back();
  }
}
