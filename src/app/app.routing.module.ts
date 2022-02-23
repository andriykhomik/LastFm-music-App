import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/genres', pathMatch: 'full' },
  {
    path: 'genres',
    loadChildren: () =>
      import('./genres/genres.module').then((m) => m.GenresModule),
  },
  {
    path: 'genres/albums/:genre',
    loadChildren: () =>
      import('./albums/albums.module').then((m) => m.AlbumsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
