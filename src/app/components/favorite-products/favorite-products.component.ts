import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.css']
})
export class FavoriteProductsComponent implements OnInit {
  title: string


  constructor(private router: Router, public messagesService: MessagesService) { }

  ngOnInit() {
    this.title = "Favoriti"
  }

  viewProduct(name: string): void {
    this.router.navigate([`/product/${name}`]);
  }

}
