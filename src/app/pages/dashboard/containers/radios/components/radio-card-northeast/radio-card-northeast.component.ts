import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { State } from '@models/state.interface';

@Component({
  selector: 'app-radio-card-northeast',
  templateUrl: './radio-card-northeast.component.html',
  styleUrls: ['./radio-card-northeast.component.scss']
})
export class RadioCardNortheastComponent implements OnInit {
  @Input() regions = [];

  public data = [
    {
      name: 'Alagoas',
      content: null,
    },
    {
      name: 'Bahia',
      content: null,
    },
    {
      name: 'Ceará',
      content: null,
    },
    {
      name: 'Maranhão',
      content: null,
    },
    {
      name: 'Paraíba',
      content: null,
    },
    {
      name: 'Pernambuco',
      content: null,
    },
    {
      name: 'Piauí',
      content: null,
    },
    {
      name: 'Rio Grande do Norte',
      content: null,
    },
    {
      name: 'Sergipe',
      content: null,
    }
  ];
  public state: State = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.regions.map(statesValues => {
      const {
        alagoas,
        bahia,
        ceara,
        maranhao,
        paraiba,
        pernambuco,
        piaui,
        rioGrandeNorte,
        sergipe
      } = statesValues;
      this.data[0].content = alagoas;
      this.data[1].content = bahia;
      this.data[2].content = ceara;
      this.data[3].content = maranhao;
      this.data[4].content = paraiba;
      this.data[5].content = pernambuco;
      this.data[6].content = piaui;
      this.data[7].content = rioGrandeNorte;
      this.data[8].content = sergipe;
    });
  }

  handleState(state: State): void {
    this.state = state;
    this.router.navigate(['/radio'], {
      state: { datas: this.state }
    });
  }
}
