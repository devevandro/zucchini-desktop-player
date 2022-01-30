import { Component, OnDestroy, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Playlist } from '@models/playlist-model';
import { PlaylistState } from '@store/playlist/playlist.state';
import { CreatePlaylist, LoadRequestPlaylists } from '@store/playlist/playlist.actions';


@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit, OnDestroy {
  @Select(actionsExecuting([CreatePlaylist, LoadRequestPlaylists])) loading$: Observable<ActionsExecuting>;

  public albums;
  public title = 'Álbuns';
  public newAlbum = 'Novo álbum';
  public subscription: Subscription[] = [];
  public favoriteValues: Observable<any[]>;

  constructor(
    private store: Store,
    private spinner: NgxSpinnerService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadRequestPlaylists());

    const loadingSubscription = this.loading$.subscribe(hasActionsExecuting => {
      if (hasActionsExecuting) {
        this.spinner.show();
        return;
      }

      this.spinner.hide();
    });

    const ref = this.db.list('albums-list');
    this.favoriteValues = ref.valueChanges();
    this.favoriteValues.subscribe((resp) => {
      this.albums = resp;
    });

    // this.albums$ = this.store.select(PlaylistState.getPlaylists);
    // this.albums$ = this.store.select(PlaylistState.getPlaylists);

    this.subscription.push(loadingSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

  handleCreatePlaylist(playlist: Playlist): void {
    this.store.dispatch(new CreatePlaylist(playlist));
  }
}
