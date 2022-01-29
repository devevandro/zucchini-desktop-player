import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-radios',
  templateUrl: './favorite-radios.component.html',
  styleUrls: ['./favorite-radios.component.scss']
})
export class FavoriteRadiosComponent implements OnInit {
  public favoriteValues: Observable<any[]>;
  public datas: any[];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    const ref = this.db.list('favorites-radios');
    this.favoriteValues = ref.valueChanges();
    this.favoriteValues.subscribe((resp) => {
      this.datas = resp;
    });
  }
}
