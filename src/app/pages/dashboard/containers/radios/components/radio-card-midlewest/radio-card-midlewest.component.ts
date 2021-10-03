import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@models/state.interface';

@Component({
  selector: 'app-radio-card-midlewest',
  templateUrl: './radio-card-midlewest.component.html',
  styleUrls: ['./radio-card-midlewest.component.scss']
})
export class RadioCardMidlewestComponent implements OnInit {
  @Input() regions = [];

  public data = [
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
  public state: State = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.regions.map(statesValues => {
      const { distritoFederal, goias, matoGrosso, matoGrossoSul } = statesValues;
      this.data[0].content = distritoFederal;
      this.data[1].content = goias;
      this.data[2].content = matoGrosso;
      this.data[3].content = matoGrossoSul;
    });
  }

  handleState(state: State): void {
    this.state = state;
    this.router.navigate(['/radio'], {
      state: { datas: this.state }
    });
  }
}
