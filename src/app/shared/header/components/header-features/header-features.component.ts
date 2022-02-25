import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-header-features',
  templateUrl: './header-features.component.html',
  styleUrls: ['./header-features.component.css'],
})
export class HeaderFeaturesComponent implements OnInit {
  public faHeart = faHeart;
  public likes!: number;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.favoritesCount$.subscribe(
      (liked: number) => (this.likes = liked)
    );
  }
}
