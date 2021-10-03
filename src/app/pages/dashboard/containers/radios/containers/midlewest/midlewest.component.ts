import { Component, OnInit } from '@angular/core';

import { RadiosService } from '../../services/radios.service';

@Component({
  selector: 'app-midlewest',
  templateUrl: './midlewest.component.html',
  styleUrls: ['./midlewest.component.scss']
})
export class MidlewestComponent implements OnInit {
  public midlewest = [];

  constructor(private radioService: RadiosService) { }

  ngOnInit(): void {
    this.midlewest = this.radioService.getAllMidlewestRegion();
  }
}
