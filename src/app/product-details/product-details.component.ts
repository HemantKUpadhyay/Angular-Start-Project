import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param)=>{
      this.product=products[+param.get('productId')]
    });

  }

    addToCart(product){
      window.alert('Your product has been added to cart!');
      this.cartService.addToCart(product);
    }
  

}