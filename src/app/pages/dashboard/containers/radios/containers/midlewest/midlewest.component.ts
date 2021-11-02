import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-midlewest',
  templateUrl: './midlewest.component.html',
  styleUrls: ['./midlewest.component.scss']
})
export class MidlewestComponent implements OnInit {
  public midlewest = [];
  public datas = [
    {
      name: 'Distrito Federal',
      content: null,
    },
    {
      name: 'Goiás',
      content: null,
    },
    {
      name: 'Mato Grosso',
      content: null,
    },
    {
      name: 'Mato Grosso do Sul',
      content: null,
    }
  ];

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.midlewest = this.radioService.getAllMidlewestRegion();
    this.midlewest.map(statesValues => {
      const { distritoFederal, goias, matoGrosso, matoGrossoSul } = statesValues;
      this.datas[0].content = distritoFederal;
      this.datas[1].content = goias;
      this.datas[2].content = matoGrosso;
      this.datas[3].content = matoGrossoSul;
    });
  }
}
