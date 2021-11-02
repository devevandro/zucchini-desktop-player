import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Music, Playlist } from '@models/playlist-model';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpService } from 'src/app/providers/http.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService extends HttpService {

  constructor(httpClient: HttpClient, private notification: NzNotificationService) {
    super('playlists', httpClient);
  }

  async getAllPlaylists(): Promise<any> {
    try {
      const playlists = await this.get<{ playlists: Playlist[]; }>();
      return playlists.playlists;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getPlaylistById(playlistId: string): Promise<any> {
    try {
      const playlist = await this.get<{ playlist: Playlist }>(`/${playlistId}`);
      return playlist;
    } catch (error) {
      return;
    }
  }

  async storePlaylist(playlist: Playlist): Promise<any> {
    return this.post(playlist).then((newPlaylist: { playlist: Playlist }) => {
      this.notification.create(
        'success',
        'Playlist criada com sucesso',
        ''
      );
      return newPlaylist.playlist;
    }).catch((e) => {
      this.notification.create(
        'error',
        'Erro ao criar a playlist',
        `${e?.message}`
      );
      return;
    });
    /* try {
      const newPlaylist = await this.post(playlist);
      if (newPlaylist) {
        this.notification.create(
          'success',
          'Playlist criada com sucesso',
          ''
        );
        return playlist;
      }
    } catch (e) {
      this.notification.create(
        'error',
        'Erro ao criar a playlist',
        `${e?.message}`
      );
      return;
    } */
  }

  async updatePlaylist(playlist: Playlist, music: Music): Promise<any> {
    try {
      await this.put(music, `/${playlist._id}/music`);
      return true;
    } catch (e) {
      return false;
    }
  }

  async removePlaylistById(playlistId: string): Promise<any> {
    try {
      await this.delete(`/${playlistId}`);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getMusicById(musicId: string): Promise<any> {
    try {
      const music = await this.get<{ music: Music }>(`/music/${musicId}`);
      return music;
    } catch (error) {
      return false;
    }
  }

  async removeMusicById(playlistId: string, musicId: string): Promise<any> {
    try {
      await this.delete(`${playlistId}/music/${musicId}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
