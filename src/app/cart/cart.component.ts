import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsInCart;
  checkOutForm;


  constructor(
     private cartService: CartService,
     private formBuilder: FormBuilder,
  ) {
   
    
   }

  ngOnInit() {

    this.itemsInCart=this.cartService.getItems();
    this.checkOutForm = this.formBuilder.group(
      {
        name: '',
        email: '',
        Mobile: Number
      }
    );

  }


  onSubmit(customerData){
    console.warn("Your purchase order has been submitted!");
    this.itemsInCart=this.cartService.clearCart();
    this.checkOutForm.reset();
  }

}