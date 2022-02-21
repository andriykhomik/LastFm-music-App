import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Album, AlbumsRes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    @Inject('ATOKEN') private atoken: string,
    private httpClient: HttpClient
  ) {}

  getTopAlbums(genre: string): Observable<Album[]> {
    return this.httpClient
      .get<AlbumsRes>(
        `${this.baseUrl}/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${this.atoken}&format=json`
      )
      .pipe(map((response: AlbumsRes) => response.albums.album));
  }
}
