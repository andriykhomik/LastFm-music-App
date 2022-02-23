import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../../shared/interfaces/interfaces';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../../../shared/services/state.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-albums-item',
  templateUrl: './albums-item.component.html',
  styleUrls: ['./albums-item.component.css'],
})
export class AlbumsItemComponent implements OnInit {
  @Input() public album!: Album;
  @Input() public image!: string;
  public faHeart = faHeart;
  public isLiked: boolean = false;
  private currentGenre!: string;

  constructor(
    private stateService: StateService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stateService.favoritesCounter(null);
    this.getExtraLargeImage();
    this.getRout();
    this.isLiked = this.stateService.doCheckIsFavorite(
      this.typingString(this.album.artist.name),
      this.typingString(this.album.name),
      this.currentGenre
    );
  }

  private getExtraLargeImage(): void {
    this.image = this.album.image.find((image) => image.size === 'extralarge')![
      '#text'
    ];
  }

  public addRemoveFavorite(): void {
    this.isLiked = !this.isLiked;
    this.stateService.favoritesCounter(this.isLiked);
    this.stateService.setAlbum(
      this.typingString(this.album.artist.name),
      this.typingString(this.album.name),
      this.currentGenre
    );
  }

  typingString(str: string): string {
    return str
      .split('')
      .map((char) => char.trim())
      .join('')
      .toLowerCase();
  }

  private getRout(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.currentGenre = params['genre'];
    });
  }
}
