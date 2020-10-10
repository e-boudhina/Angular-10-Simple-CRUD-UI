import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import {Router} from '@angular/router';
import {Product} from '../product';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  products: Array<Product> = [];
  constructor(private _route: Router, private _service: NgserviceService) { }
  ngOnInit(): void {
   // this.products =  this._service.fetchProductListFromRemote().subscribe(
   //    data=>console.log("Response received"),
   //    error => console.log("Exception occurred")
    this.getProducts();
  }

  getProducts() {
    this._service.fetchProductListFromRemote().subscribe(
      data => this.products = data, error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.products == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddProduct() {
    this._route.navigate(['/addproduct']);
  }

  goToUpdateProduct(id: number) {
    console.log("id: "+ id);
    this._route.navigate(['/editproduct', id]);
  }


  goToViewProduct(id: number){
    this._route.navigate(['/viewproduct', id]);

  }

  /* I uses delete request, but you can use post as well, it will work, the problem I have is the delete post has no return body,
   so I can use success or error message with it, what ever I do it end up in the exception, for the time being,
   to refresh the product list I added it with the exception until I resolve it */

  deleteProduct(id: number) {
    if (confirm('Are you sure ?'))
  return this._service.deleteProductBdyIdFromRemote(id).subscribe(
    success =>{
      ("Product deleted succesfully");
    },
    error=> {console.log("Exception occured 2"); this.getProducts()}
   )
  }
}
