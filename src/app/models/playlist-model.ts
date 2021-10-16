export interface Playlist {
  _id: string;
  name: string;
  image: string;
  musics?: Array<Music>;
}

export interface Music {
  _id: string;
  name: string;
  url: string;
}
