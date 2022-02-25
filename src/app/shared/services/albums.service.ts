import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Album, AlbumsRes, GotAlbum, Image } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  public inputValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    @Inject('ATOKEN') private atoken: string,
    private httpClient: HttpClient
  ) {}

  getTopAlbums(genre: string): Observable<GotAlbum[]> {
    return this.httpClient
      .get<AlbumsRes>(
        `${this.baseUrl}/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${this.atoken}&format=json`
      )
      .pipe(
        map((response: AlbumsRes) => {
          return response.albums.album.map((album: Album) => {
            return {
              albumName: album.name,
              artistName: album.artist.name,
              image: album.image.find(
                (img: Image) => img.size === 'extralarge'
              )['#text'],
            };
          });
        })
      );
  }
}
