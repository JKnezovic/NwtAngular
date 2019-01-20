import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from 'src/app/models/product.model';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-product-holder',
  templateUrl: './product-holder.component.html',
  styleUrls: ['./product-holder.component.css']
})
export class ProductHolderComponent implements OnInit {
  @Input() product: IProduct;
  @Input() index: number;
  faStar = faStar;
  faHeart = faHeart;
  @Output() productId = new EventEmitter<string>();
  wasClicked = false;
  review: Review;

  constructor(public messagesService: MessagesService) { }

  ngOnInit() { }

  onClick() {
    this.wasClicked = !this.wasClicked;
  }

  calculateAverage = function (MyData) {
    var sum = 0;
    for (var i = 0; i < MyData.length; i++) {
      sum += parseInt(MyData[i].score, 10);
    }
    var avg = sum / MyData.length;
    return avg;
  }
  calculateAverage2 = function (MyData, value: number) {
    var sum = 0;
    for (var i = 0; i < MyData.length; i++) {
      sum += parseInt(MyData[i].score, 10);
    }
    var avg = (sum + value) / (MyData.length + 1);
    return avg;
  }
  update(value, myData) {
    document.getElementById("score").innerHTML = "ocjena:" + this.calculateAverage2(myData, value) + " od 5";
  }
  passProductId(name: string): void {
    this.productId.emit(name);
  }

}
