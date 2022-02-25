import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './components/albums/albums.component';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumsItemComponent } from './components/albums-item/albums-item.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [{ path: '', component: AlbumsComponent }];

@NgModule({
  declarations: [AlbumsComponent, AlbumsListComponent, AlbumsItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FontAwesomeModule,
  ],
})
export class AlbumsModule {}
