import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CartService {

  constructor(
    // private httpModule:HttpClientModule,
    private http:HttpClient,
  ) { }

  items=[];

  addToCart(product){
    this.items.push(product);
  }

  getItems()
  {
    return this.items;
  }

  clearCart()
  {
    this.items=[];
    return this.items;
  }

  shippingCost;

  getShippingCost(){
    this.shippingCost= this.http.get('/assets/shipping.json');
    console.log(this.shippingCost);
    return this.shippingCost;
    
  }




}