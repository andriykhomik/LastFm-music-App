import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres-item',
  templateUrl: './genres-item.component.html',
  styleUrls: ['./genres-item.component.scss'],
})
export class GenresItemComponent implements OnInit {
  @Input() public genre!: string;
  public picturePath: string = 'assets/images';

  constructor() {}

  ngOnInit(): void {}
}
