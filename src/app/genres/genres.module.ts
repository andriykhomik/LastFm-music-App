import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './components/genres/genres.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { GenresItemComponent } from './components/genres-item/genres-item.component';

const routes: Routes = [{ path: '', component: GenresComponent }];

@NgModule({
  declarations: [GenresComponent, GenresListComponent, GenresItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GenresModule {}
