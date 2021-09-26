import { Component, OnInit } from '@angular/core';

import { PLAYER_OPTIONS } from '@constants/player-options';
import { REGIONS } from '@constants/regions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isCollapsed = false;
  public routes = REGIONS;
  public playerOptions = PLAYER_OPTIONS;

  ngOnInit(): void {}
}
