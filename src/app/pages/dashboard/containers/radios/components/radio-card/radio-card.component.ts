import { Component, Input, OnInit } from '@angular/core';

import { State } from '@models/state.interface';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss']
})
export class RadioCardComponent implements OnInit {
  @Input() regions = [];
  public data = [
    {
      name: 'Paraná',
      content: null,
    },
    {
      name: 'Porto Alegre',
      content: null,
    },
    {
      name: 'Santa Catarina',
      content: null,
    }
  ];
  public state: State = null;

  constructor() { }

  ngOnInit(): void {
    this.regions.map(statesValues => {
      const { parana, portoAlegre, santaCatarina } = statesValues;
      this.data[0].content = parana;
      this.data[1].content = portoAlegre;
      this.data[2].content = santaCatarina;
    });
  }

  handleState(state: State): void {
    this.state = state;
  }
}
