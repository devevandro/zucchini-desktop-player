import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { State } from '@models/state.interface';

@Component({
  selector: 'app-radio-card-southeast',
  templateUrl: './radio-card-southeast.component.html',
  styleUrls: ['./radio-card-southeast.component.scss']
})
export class RadioCardSoutheastComponent implements OnInit {
  @Input() regions = [];

  public data = [
    {
      name: 'Espirito Santo',
      content: null,
    },
    {
      name: 'Minas Gerais',
      content: null,
    },
    {
      name: 'Rio de Janeiro',
      content: null,
    },
    {
      name: 'São Paulo',
      content: null,
    }
  ];
  public state: State = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.regions.map(statesValues => {
      const { espiritoSanto, minasGerais, rioDeJaneiro, saoPaulo } = statesValues;
      this.data[0].content = espiritoSanto;
      this.data[1].content = minasGerais;
      this.data[2].content = rioDeJaneiro;
      this.data[3].content = saoPaulo;
    });
  }

  handleState(state: State): void {
    this.state = state;
    this.router.navigate(['/radio'], {
      state: { datas: this.state }
    });
  }
}
