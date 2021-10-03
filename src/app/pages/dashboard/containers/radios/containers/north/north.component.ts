import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-north',
  templateUrl: './north.component.html',
  styleUrls: ['./north.component.scss']
})
export class NorthComponent implements OnInit {
  public north = [];

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.north = this.radioService.getAllNorthRegion();
  }
}
