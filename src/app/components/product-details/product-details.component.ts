import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: IProduct;
  private subscription: Subscription;
  faUser = faUser;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.productService.getProducts().subscribe((products: IProduct[]) => {
        this.product = products.find((s: IProduct) => s.name === params['name']);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  calculateAverage = function (MyData) {
    var sum = 0;
    for (var i = 0; i < MyData.length; i++) {
      sum += parseInt(MyData[i].score, 10);
    }
    var avg = sum / MyData.length;
    return avg;
  }
}
