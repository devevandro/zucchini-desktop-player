import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';

import { Playlist } from '@models/playlist-model';
import { LoadRequestPlaylists, RemovePlaylistById } from '@store/playlist/playlist.actions';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit, OnDestroy {
  @Input() albums = [];
  @Select(actionsExecuting([RemovePlaylistById])) loading$: Observable<ActionsExecuting>;

  public subscription: Subscription[] = [];
  public confirmModal?: NzModalRef;

  constructor(
    private store: Store,
    private modal: NzModalService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    const loadingSubscription = this.loading$.subscribe(hasActionsExecuting => {
      if (hasActionsExecuting) {
        this.spinner.show();
        return;
      }

      this.spinner.hide();
    });

    this.subscription.push(loadingSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

  handleRemovePlaylist(playlist: Playlist): void {
    const { _id, name} = playlist;
    this.confirmModal = this.modal.confirm({
      nzTitle: `Excluir a playlist.`,
      nzOkText: 'Remover',
      nzContent: `Deseja remover a playlist ${name}? Esta ação não poderá ser desfeita.`,
      nzOkDanger: true,
      nzOnOk: () => this.handleRemove(_id),
      nzOnCancel: () => {},
    });
  }

  handleRemove(id: string): void {
    this.store.dispatch(new RemovePlaylistById(id));
  }
}
