import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LSObject } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private likesCount: number = +JSON.parse(
    localStorage.getItem('liked') || '0'
  );
  public state: LSObject = JSON.parse(
    localStorage.getItem('favoriteList') || '0'
  );
  public albumsRate$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.likesCount
  );

  public setAlbum(authorName: string, albumName: string, genre: string): void {
    if (!this.state) {
      this.state = {
        [genre]: { [authorName]: [albumName] },
      };
    } else {
      if (!this.state[genre]) {
        this.state[genre] = { [authorName]: [albumName] };
      } else if (this.state[genre] && !this.state[genre][authorName]) {
        this.state[genre][authorName] = [albumName];
      } else if (this.state[genre] && this.state[genre][authorName]) {
        if (this.state[genre][authorName].includes(albumName)) {
          this.state[genre][authorName] = this.state[genre][authorName].filter(
            (album: string) => {
              return album !== albumName;
            }
          );
        } else {
          this.state[genre][authorName].push(albumName);
        }
      }
    }
    localStorage.setItem('favoriteList', JSON.stringify({ ...this.state }));
  }

  public doCheckIsFavorite(
    authorName: string,
    albumName: string,
    genre: string
  ): boolean {
    let isLiked = false;
    if (this.state && this.state[genre] && this.state[genre][authorName]) {
      isLiked = this.state[genre][authorName].includes(albumName);
    }
    return isLiked;
  }

  public favoritesCounter(isLiked: boolean | null): void {
    if (isLiked && this.likesCount === 0) {
      this.likesCount++;
      localStorage.setItem('liked', JSON.stringify(0));
    } else if (this.likesCount === 0) {
    } else {
      if (isLiked === null) {
        return;
      }
      if (isLiked) {
        this.likesCount++;
      } else {
        this.likesCount--;
      }
      localStorage.setItem('liked', JSON.stringify(this.likesCount));
    }
    this.albumsRate$.next(this.likesCount);
  }
}
