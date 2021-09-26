import { Component, OnInit } from '@angular/core';

import { Region } from '@models/region.interface';
import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-south',
  templateUrl: './south.component.html',
  styleUrls: ['./south.component.scss']
})
export class SouthComponent implements OnInit {
  public south = [];

  constructor(private radiosService: RadiosService) { }

  ngOnInit(): void {
    this.south = this.radiosService.getAllSouthRegion();
  }
}
