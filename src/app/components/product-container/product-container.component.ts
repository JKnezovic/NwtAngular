import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
  products: Observable<IProduct[]>;
  faSearch = faSearch;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  viewProduct(name: string): void {
    this.router.navigate([`/product/${name}`]);
  }


  myFunction = function () {
    // Declare variables
    var input, filter, container, prod, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName("product");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < container.length; i++) {
      a = container[i].getElementsByClassName("ProductName")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        container[i].style.display = "";
      } else {
        container[i].style.display = "none";
      }
    }
  }

}
