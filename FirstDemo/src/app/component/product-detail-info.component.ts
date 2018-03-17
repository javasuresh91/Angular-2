import { Component, OnInit } from '@angular/core';
import { iProduct } from './product-interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-detail-info.component.html',
  styleUrls: ['./product-detail-info.component.css']
})
export class ProductDetailInfoComponent implements OnInit {
pageTitle:string = 'Product Details';
products:iProduct;
  constructor(private _param : ActivatedRoute,private _route :Router) { }

  onBack() : void {
    console.log("Back CLickes");
    this._route.navigate(['/product']);
  }
  ngOnInit() {
    let id = this._param.snapshot.paramMap.get('id');
    
    this.pageTitle += ":"+id;
    console.log(id +  " "+this.pageTitle);
    this.products = {
"productName" : "Rice",
"productCode" :"RC15",
"rate" : 12,
"imageUrl" : ""
    }
  }

}
