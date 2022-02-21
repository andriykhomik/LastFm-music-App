import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent implements OnInit {
  @Input() public genres!: string[];

  constructor() {}

  ngOnInit(): void {}
}
