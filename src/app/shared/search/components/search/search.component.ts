import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlbumsService } from '../../../services/albums.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public searchInput: FormControl = new FormControl('');

  constructor(private albumsService: AlbumsService) {}

  public searchItems() {
    this.albumsService.inputValue$.next(this.searchInput.value);
  }
}
