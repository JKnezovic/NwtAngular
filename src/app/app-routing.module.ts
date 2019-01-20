import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductHolderComponent } from './components/product-holder/product-holder.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';

const routes: Routes = [
  { path: 'products', component: ProductContainerComponent },
  { path: 'product/:name', component: ProductDetailsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
