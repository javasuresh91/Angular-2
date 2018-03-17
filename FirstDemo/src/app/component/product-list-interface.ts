import { Component } from '@angular/core';
import { iProduct } from './product-interface';


@Component({
    selector : 'product-list',
    templateUrl :'./../template/product-list.html'
})

export class ProductListComponent {
panelTitle :string = "Product List";
filterByLabel :string = 'Filter By';
filteredByLabel :string = 'Filtered By';
imageWidth:number = 150;
eventFlag :boolean = false;
filterText :string='cart';
products : iProduct[] = [
{
    "productName":"AAAA",
    "productCode":"5kif",
    "rate" : 1.25,
    "imageUrl" : "https://www.gstatic.com/webp/gallery3/1.png"
},
{
    "productName":"BBBB",
    "productCode":"5yu5de5",
    "rate" : 2.25,
    "imageUrl" : "../download.jpg"
}
];
toggle() : void{
    this.eventFlag = !this.eventFlag;
}
}