import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductHolderComponent } from './components/product-holder/product-holder.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FavoriteProductsComponent } from './components/favorite-products/favorite-products.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { FavoriteContainerComponent } from './components/favorite-container/favorite-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductHolderComponent,
    ProductDetailsComponent,
    FavoriteProductsComponent,
    ProductReviewComponent,
    ProductContainerComponent,
    FavoriteContainerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
