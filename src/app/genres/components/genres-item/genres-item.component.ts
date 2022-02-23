import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genres-item',
  templateUrl: './genres-item.component.html',
  styleUrls: ['./genres-item.component.scss'],
})
export class GenresItemComponent {
  @Input() public genre!: string;
  public picturePath: string = 'assets/images';
}
