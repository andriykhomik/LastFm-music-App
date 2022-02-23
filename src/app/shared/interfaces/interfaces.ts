export interface AlbumsRes {
  albums: Albums;
}

export interface Albums {
  album: Album[];
}

export interface Album {
  artist: Artist;
  image: Image[];
  mbid: string;
  name: string;
  url: string;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
}

export interface Image {
  size: string;
  ['#text']: string;
}

export interface LSObject {
  [key: string]: any;
}
