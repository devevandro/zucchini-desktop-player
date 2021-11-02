import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-north',
  templateUrl: './north.component.html',
  styleUrls: ['./north.component.scss']
})
export class NorthComponent implements OnInit {
  public north = [];
  public datas = [
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

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.north = this.radioService.getAllNorthRegion();
    this.north.map(statesValues => {
      const {
        acre,
        amapa,
        amazonas,
        para,
        rondonia,
        roraima,
        tocantins,
      } = statesValues;
      this.datas[0].content = acre;
      this.datas[1].content = amapa;
      this.datas[2].content = amazonas;
      this.datas[3].content = para;
      this.datas[4].content = rondonia;
      this.datas[5].content = roraima;
      this.datas[6].content = tocantins;
    });
  }
}
