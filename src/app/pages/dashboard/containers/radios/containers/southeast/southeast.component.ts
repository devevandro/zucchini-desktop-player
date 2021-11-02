import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-southeast',
  templateUrl: './southeast.component.html',
  styleUrls: ['./southeast.component.scss']
})
export class SoutheastComponent implements OnInit {
  public southeast = [];
  public datas = [
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

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.southeast = this.radioService.getAllSoutheastRegion();
    this.southeast.map(statesValues => {
      const { espiritoSanto, minasGerais, rioDeJaneiro, saoPaulo } = statesValues;
      this.datas[0].content = espiritoSanto;
      this.datas[1].content = minasGerais;
      this.datas[2].content = rioDeJaneiro;
      this.datas[3].content = saoPaulo;
    });
  }
}
