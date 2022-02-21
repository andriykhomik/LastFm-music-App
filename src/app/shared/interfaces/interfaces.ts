export interface AlbumsRes {
  albums: Albums;
}

export interface Albums {
  album: Album[];
}

export interface Album {
  artist: Artist;
  // image: (4) [{…}, {…}, {…}, {…}]
  mbid: string;
  name: string;
  url: string;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
}
