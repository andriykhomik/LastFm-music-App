import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../../shared/interfaces/interfaces';
import { AlbumsService } from '../../../shared/services/albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
})
export class AlbumsListComponent implements OnInit {
  @Input() public albums!: Album[];
  public foundAlbums!: Album[];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.filterSongs();
  }

  private filterSongs(): void {
    this.albumsService.inputValue$.subscribe(
      (searchValue) => (this.foundAlbums = this.findSongs(searchValue))
    );
  }

  private findSongs(searchValue: string): Album[] {
    if (this.albums.length) {
      return this.albums.filter((album: Album) =>
        album.name.includes(searchValue)
      );
    }
    return [];
  }
}
