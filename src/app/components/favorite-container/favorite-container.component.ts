import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-favorite-container',
  templateUrl: './favorite-container.component.html',
  styleUrls: ['./favorite-container.component.css']
})
export class FavoriteContainerComponent implements OnInit {
  @Output() productId = new EventEmitter<string>();
  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }
  passProductId(name: string): void {
    this.productId.emit(name);
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
