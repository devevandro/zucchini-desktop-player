import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';

import { Playlist } from '@models/playlist-model';
import { PlaylistState } from '@store/playlist/playlist.state';
import { LoadRequestPlaylists } from '@store/playlist/playlist.actions';


@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit, OnDestroy {
  @Select(actionsExecuting([LoadRequestPlaylists])) loading$: Observable<ActionsExecuting>;

  public albums: Playlist[];
  public title = 'Álbuns';
  public newAlbum = 'Novo álbum';
  public subscription: Subscription[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadRequestPlaylists());

    const loadingSubscription = this.loading$.subscribe(hasActionsExecuting => {
      if (hasActionsExecuting) {
        return;
      }

      this.albums = this.store.selectSnapshot(PlaylistState.getPlaylists);
    });

    this.subscription.push(loadingSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }
}
