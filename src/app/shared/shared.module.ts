import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderFeaturesComponent } from './components/header-features/header-features.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, HeaderFeaturesComponent, SearchComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
