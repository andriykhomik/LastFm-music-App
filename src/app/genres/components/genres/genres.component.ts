import { Component } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  public genres: string[] = [
    'rock',
    'electro',
    'hip-hop',
    'pop',
    'R&B',
    'indie',
  ];
}
