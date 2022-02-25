import { Component, Input, OnInit } from '@angular/core';
import { GotAlbum } from '../../../shared/interfaces';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../../../shared/services/state.service';

@Component({
  selector: 'app-albums-item',
  templateUrl: './albums-item.component.html',
  styleUrls: ['./albums-item.component.css'],
})
export class AlbumsItemComponent implements OnInit {
  @Input() public album!: GotAlbum;
  public faHeart = faHeart;
  public isLiked: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.isLiked = this.stateService.doCheckIsFavorite(this.album);
  }

  public addRemoveFavorite(): void {
    this.isLiked = this.stateService.setAlbum(this.album);
  }
}
