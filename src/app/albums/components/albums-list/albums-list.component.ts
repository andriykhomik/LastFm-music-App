import { Component, Input, OnInit } from '@angular/core';
import { GotAlbum } from '../../../shared/interfaces';
import { AlbumsService } from '../../../shared/services/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
})
export class AlbumsListComponent implements OnInit {
  @Input() public albums!: GotAlbum[];
  public foundAlbums!: GotAlbum[];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.filterAlbums();
  }

  private filterAlbums(): void {
    this.albumsService.inputValue$.subscribe(
      (searchValue: string) => (this.foundAlbums = this.findAlbums(searchValue))
    );
  }

  private findAlbums(searchValue: string): GotAlbum[] {
    if (this.albums.length) {
      return this.albums.filter((album: GotAlbum) =>
        album.albumName.includes(searchValue)
      );
    }
    return [];
  }
}
