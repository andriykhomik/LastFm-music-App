import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../../shared/interfaces/interfaces';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {
    this.getExtraLargeImage();
  }

  private getExtraLargeImage(): void {
    this.image = this.album.image.find((image) => image.size === 'extralarge')![
      '#text'
    ];
  }
}
