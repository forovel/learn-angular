import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/products/product-details/product-detail.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { ProductDetailGuard } from './guards/product-detail.guard';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
