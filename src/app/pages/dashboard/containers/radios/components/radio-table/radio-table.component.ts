import { Component, Input, OnInit } from '@angular/core';

import { State } from '@models/state.interface';

@Component({
  selector: 'app-radio-table',
  templateUrl: './radio-table.component.html',
  styleUrls: ['./radio-table.component.scss']
})
export class RadioTableComponent implements OnInit {
  @Input() state: State;

  constructor() { }

  ngOnInit(): void {
    console.log(this.state);
  }

}
