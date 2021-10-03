import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-southeast',
  templateUrl: './southeast.component.html',
  styleUrls: ['./southeast.component.scss']
})
export class SoutheastComponent implements OnInit {
  public southeast = [];

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.southeast = this.radioService.getAllSoutheastRegion();
  }
}
