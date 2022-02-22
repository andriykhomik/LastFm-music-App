import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../shared/services/albums.service';
import { Album } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  public genres: string[] = [
    'rock',
    'electro',
    'hip-hop',
    'pop',
    'R&B',
    'indie',
  ];
  constructor() {}

  ngOnInit(): void {}
}
