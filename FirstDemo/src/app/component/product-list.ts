import { Component, OnInit } from '@angular/core';
import { iProduct } from './product-interface';


@Component({
    // selector: 'product-list',
    templateUrl: './../template/product-list.html',
    styleUrls: ['./../CSS/product-list-component.css']
})

export class ProductListComponent implements OnInit {
    panelTitle: string = "Product List";
    filterByLabel: string = 'Filter By';
    filteredByLabel: string = 'Filtered By';
    imageWidth: number = 150;
    eventFlag: boolean = false;
    _filterText: string;
    get filterText(): string {
        return this._filterText;
    }
    set filterText(value: string) {
        console.log("Setting Value");
        this._filterText = value;
        this.filteredData = this._filterText ? this.performFilter(this._filterText) : this.products;
    }
    performFilter(filerBy: string): iProduct[] {
        console.log("Filtering Value");
        filerBy = filerBy.toLocaleLowerCase();
        return this.products.filter((pro: iProduct) => pro.productName.toLocaleLowerCase().indexOf(filerBy) != -1);
    }
    showClickedRate(message :string ):void {
        this.panelTitle = "Product List " +message;
        
    }
    constructor() {
        console.log("Welocme to Constructor");
        this.filteredData = this.products;
        this._filterText = 'AA~AA';
    }
    filteredData: iProduct[];
    // We can use any[]
    products: iProduct[] = [
        {
            "productName": "AA-AA",
            "productCode": "5kif",
            "rate": 1.25,
            "imageUrl": "https://www.gstatic.com/webp/gallery3/1.png"
        },
        {
            "productName": "BB-BB",
            "productCode": "5yu5de5",
            "rate": 2.25,
            "imageUrl": "../download.jpg"
        }
    ];
    toggle(): void {
        this.eventFlag = !this.eventFlag;
    }
    ngOnInit(): void {
        console.log("Welocme to interface");
    }
}