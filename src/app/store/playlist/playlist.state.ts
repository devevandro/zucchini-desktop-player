import { Injectable } from '@angular/core';

import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';

import {
  CreatePlaylist,
  LoadRequestPlaylistById,
  LoadRequestPlaylists,
  RemovePlaylistById,
  UpdatePlaylist
} from './playlist.actions';
import { Playlist } from '@models/playlist-model';
import { PlaylistModel } from './playlist-model.interface';
import { PlaylistService } from '@pages/dashboard/containers/player/service/playlist.service';

@State<PlaylistModel>({
  name: 'playlist',
  defaults: {
    playlists: undefined,
  }
})
@Injectable()
export class PlaylistState {
  @Selector()
  static getPlaylists({ playlists }: PlaylistModel): Playlist[] {
    return playlists;
  }

  static getPlaylistById(playlistId: string): any {
    return createSelector([PlaylistState.getPlaylists], (state: Playlist[]) => {
      return state.find(playlist => playlist._id === playlistId);
    });
  }

  constructor(private playlistService: PlaylistService) {}

  @Action(LoadRequestPlaylists)
  async loadRequest({ patchState }: StateContext<PlaylistModel>): Promise<any> {
    const playlists = await this.playlistService.getAllPlaylists();

    patchState({ playlists });
  }

  @Action(LoadRequestPlaylistById)
  async loadRequestById({ getState, patchState }: StateContext<PlaylistModel>, { playlistId }: LoadRequestPlaylistById): Promise<any> {
    const { playlist } = await this.playlistService.getPlaylistById(playlistId);
    const {playlists: playlistState = [] } = getState();
    let playlists = [...playlistState];

    if (!playlist) {
      return;
    }

    if (playlistState) {
      const playlistIndex = playlists.findIndex(playlistCurrent => playlistCurrent._id === playlist._id);

      if (playlistIndex !== -1) {
        playlists[playlistIndex] = playlist;
      } else {
        playlists.push(playlist);
      }
    } else {
      playlists = [playlist];
    }

    patchState({ playlists });
  }

  @Action(CreatePlaylist)
  async createPlaylist({ getState, patchState }: StateContext<PlaylistModel>, { playlist }: CreatePlaylist): Promise<void> {
    const newPlaylist = await this.playlistService.storePlaylist(playlist);

    if (!newPlaylist) {
      return;
    }

    const playlists = getState().playlists.concat(newPlaylist);

    patchState({ playlists });
  }

  @Action(UpdatePlaylist)
  async updatePlaylist({ getState, patchState }: StateContext<PlaylistModel>, { playlist, music }): Promise<void> {
  }

  @Action(RemovePlaylistById)
  async removePlaylist({ getState, patchState }: StateContext<PlaylistModel>, { playlistId }: RemovePlaylistById): Promise<void> {
    const wasDelete = await this.playlistService.removePlaylistById(playlistId);

    if (!wasDelete) {
      return;
    }

    const playlistDeleted = getState().playlists.filter(playlist => playlist._id !== playlistId);

    patchState({ playlists: playlistDeleted });
  }
}
