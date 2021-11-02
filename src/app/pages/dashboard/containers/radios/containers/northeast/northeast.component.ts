import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-northeast',
  templateUrl: './northeast.component.html',
  styleUrls: ['./northeast.component.scss']
})
export class NortheastComponent implements OnInit {
  public northeast = [];
  public datas = [
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

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.northeast = this.radioService.getAllNortheastRegion();
    this.northeast.map(statesValues => {
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
      this.datas[0].content = alagoas;
      this.datas[1].content = bahia;
      this.datas[2].content = ceara;
      this.datas[3].content = maranhao;
      this.datas[4].content = paraiba;
      this.datas[5].content = pernambuco;
      this.datas[6].content = piaui;
      this.datas[7].content = rioGrandeNorte;
      this.datas[8].content = sergipe;
    });
  }
}
