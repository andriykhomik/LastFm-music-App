import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-features',
  templateUrl: './header-features.component.html',
  styleUrls: ['./header-features.component.css'],
})
export class HeaderFeaturesComponent {
  public faHeart = faHeart;
  public likes: number = 0;
}
