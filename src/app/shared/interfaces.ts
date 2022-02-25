export interface AlbumsRes {
  albums: Albums;
  ['@attr']: object;
}

export interface Image {
  size: string;
  ['#text']: string;
}

export interface Albums {
  album: Album[];
}

export interface Artist {
  name: string;
}

export interface Album {
  name: string;
  artist: Artist;
  image: any;
}

export interface GotAlbum {
  albumName: string;
  artistName: string;
  image: string;
}
