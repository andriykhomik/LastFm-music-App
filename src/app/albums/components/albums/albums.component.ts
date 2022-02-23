import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../shared/services/albums.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  private genre!: string;
  public albums$!: Observable<Album[]>;

  constructor(
    private albumsService: AlbumsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  private getAlbums() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.genre = params['genre'];
    });
    this.albums$ = this.albumsService.getTopAlbums(this.genre);
  }
}
