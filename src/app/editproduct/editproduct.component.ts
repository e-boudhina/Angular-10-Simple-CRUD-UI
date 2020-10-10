import { Component, OnInit } from '@angular/core';
import { Product} from '../product';
import {ActivatedRoute, Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

    productToUpdate = new Product();

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // When you get the "field" id from url as a parameter it will be in string format, you have to format it to "int" by parsing it.
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductBdyIdFromRemote(id).subscribe(
      data=> {
        console.log("Data fetched successfully");this.productToUpdate = data; // This line allows us to update the view in a smooth way

      },
      error => console.log("Exception on fetching product by id to edit")
    )

  }
  updateProductformsubmit()
  {
    this._service.updateProductToRemote(this.productToUpdate).subscribe
    (
      data =>{
        console.log("Data updated successfully");
        this._route.navigate(['productlist']);
      },
      error =>console.log("Error")
    )
  }

  gotolist() {
    this._route.navigate(['productlist']);
  }
}
