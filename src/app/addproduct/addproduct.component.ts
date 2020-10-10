import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import {Product} from '../product';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product = new Product();
  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

addProductformsubmit()
{
this._service.addProductToRemote(this.product).subscribe
(
  data =>{
    console.log("Data added successfully");
    this._route.navigate(['productlist']);
  },
  error =>console.log("Error")
)
}


  gotolist() {
    this._route.navigate(['productlist']);
  }
}
