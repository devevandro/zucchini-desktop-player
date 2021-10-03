import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-northeast',
  templateUrl: './northeast.component.html',
  styleUrls: ['./northeast.component.scss']
})
export class NortheastComponent implements OnInit {
  public northeast = [];

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.northeast = this.radioService.getAllNortheastRegion();
  }
}
