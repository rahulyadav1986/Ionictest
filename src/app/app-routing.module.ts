import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'entry-point',
    loadChildren: () => import('./pages/entry-point/entry-point.module').then( m => m.EntryPointPageModule)
  },
  {
    path: '',
    redirectTo: 'entry-point',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'showlist',
    loadChildren: () => import('./pages/showlist/showlist.module').then( m => m.ShowlistPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
