import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { State } from '@models/state.interface';

@Component({
  selector: 'app-radio-card-north',
  templateUrl: './radio-card-north.component.html',
  styleUrls: ['./radio-card-north.component.scss']
})
export class RadioCardNorthComponent implements OnInit {
  @Input() regions = [];

  public data = [
    {
      name: 'Acre',
      content: null,
    },
    {
      name: 'Amapá',
      content: null,
    },
    {
      name: 'Amazonas',
      content: null,
    },
    {
      name: 'Pará',
      content: null,
    },
    {
      name: 'Rondônia',
      content: null,
    },
    {
      name: 'Roraima',
      content: null,
    },
    {
      name: 'Tocantins',
      content: null,
    },
  ];
  public state: State = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.regions.map(statesValues => {
      const {
        acre,
        amapa,
        amazonas,
        para,
        rondonia,
        roraima,
        tocantins,
      } = statesValues;
      this.data[0].content = acre;
      this.data[1].content = amapa;
      this.data[2].content = amazonas;
      this.data[3].content = para;
      this.data[4].content = rondonia;
      this.data[5].content = roraima;
      this.data[6].content = tocantins;
    });
  }

  handleState(state: State): void {
    this.state = state;
    this.router.navigate(['/radio'], {
      state: { datas: this.state }
    });
  }
}
