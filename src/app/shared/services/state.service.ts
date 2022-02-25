import { Injectable } from '@angular/core';
import { GotAlbum } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public favoriteList: GotAlbum[] = JSON.parse(
    localStorage.getItem('favoriteList') || '[]'
  );
  public favoritesCount$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.favoriteList.length
  );

  public setAlbum(favoriteAlbum: GotAlbum): boolean {
    let isLiked: boolean;
    if (!this.favoriteList.length || !this.doCheckIsFavorite(favoriteAlbum)) {
      this.favoriteList.push(favoriteAlbum);
      isLiked = true;
    } else {
      this.favoriteList = this.favoriteList.filter((album: GotAlbum) => {
        return (
          album.albumName !== favoriteAlbum.albumName &&
          album.artistName !== favoriteAlbum.artistName
        );
      });
      isLiked = false;
    }

    localStorage.setItem(
      'favoriteList',
      JSON.stringify([...this.favoriteList])
    );
    this.favoritesCount$.next(this.favoriteList.length);
    return isLiked;
  }

  public doCheckIsFavorite(favoriteAlbum: GotAlbum): boolean {
    return this.favoriteList.some((album: GotAlbum) => {
      return (
        album.albumName === favoriteAlbum.albumName &&
        album.artistName === favoriteAlbum.artistName
      );
    });
  }
}
