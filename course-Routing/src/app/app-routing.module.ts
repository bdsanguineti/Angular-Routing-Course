import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';

const Rutas = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    canActivate: [AuthGuard], // canLoad prevent Preloading Feature. Change canActivate / canLoad if you want to preload Product Module or not.
    loadChildren: () =>
      import('./products/product.module').then(m => m.ProductModule)
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      Rutas,
      { preloadingStrategy: PreloadAllModules },
      // { enableTracing: true }  // F12 Console Utility for Route. Watching Routing Events
    ),
  ],
  exports: [ RouterModule ] })
export class AppRoutingModule { }
