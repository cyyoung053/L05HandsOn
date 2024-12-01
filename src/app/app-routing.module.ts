import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
  {
    path: 'cover',
    loadChildren: () => import('./pages/cover/cover.module').then(m => m.CoverPageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./pages/toc/toc.module').then(m => m.TocPageModule)
  },
  {
    path: 'content/:page',
    loadChildren: () => import('./pages/content/content.module').then(m => m.ContentPageModule)
  },
  {
    path: '**',
    redirectTo: 'cover',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

