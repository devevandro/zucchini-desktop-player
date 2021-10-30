import { Music, Playlist } from '@models/playlist-model';

// feito
export class LoadRequestPlaylists {
  static readonly type = '[Playlist] laod request';
}

// feito
export class LoadRequestPlaylistById {
  static readonly type = '[Playlist] laod request by id';
  constructor(public playlistId: string) {}
}

// feito
export class CreatePlaylist {
  static readonly type = '[Playlist] create new playlist';
  constructor(public playlist: Playlist) {}
}

export class UpdatePlaylist {
  static readonly type = '[Playlist] update playlist';
  constructor(public playlist: Playlist, public music: Music) {}
}

// feito
export class RemovePlaylistById{
  static readonly type = '[Playlist] remove playlist';
  constructor(public playlistId: string) {}
}

export class LoadRequestMusicById {
  static readonly type = '[Playlist] load request music by id';
  constructor(public musicId: string) {}
}

export class RemoveMusicById {
  static readonly type = '[Playlist] remove music by id';
  constructor(public playlistId: string, public musicId: string) {}
}
