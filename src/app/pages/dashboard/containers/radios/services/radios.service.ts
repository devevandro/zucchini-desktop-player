import { Injectable } from '@angular/core';

import * as radios from 'fm-radios';

import { Region } from '@models/region.interface';

@Injectable({
  providedIn: 'root'
})
export class RadiosService {

  constructor() { }

  getAllSouthRegion(): Array<Region> {
    const { south } = radios;
    return south;
  }

  getAllNorthRegion(): Array<Region> {
    const { north } = radios;
    return north;
  }

  getAllNortheastRegion(): Array<Region> {
    const { northeast } = radios;
    return northeast;
  }

  getAllSoutheastRegion(): Array<Region> {
    const { southeast } = radios;
    return southeast;
  }

  getAllMidlewestRegion(): Array<Region> {
    const { midlewest } = radios;
    return midlewest;
  }
}
