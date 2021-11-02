import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-south',
  templateUrl: './south.component.html',
  styleUrls: ['./south.component.scss']
})
export class SouthComponent implements OnInit {
  public south = [];
  public datas = [
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

  constructor(private radiosService: RadiosService) { }

  ngOnInit(): void {
    this.south = this.radiosService.getAllSouthRegion();
    this.south.map(statesValues => {
      const { parana, portoAlegre, santaCatarina } = statesValues;
      this.datas[0].content = parana;
      this.datas[1].content = portoAlegre;
      this.datas[2].content = santaCatarina;
    });
  }
}
