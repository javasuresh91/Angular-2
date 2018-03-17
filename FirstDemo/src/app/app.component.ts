import {Component} from '@angular/core'
import { ProductService } from './component/product-service';

@Component({
selector : 'demo-root',
template : '<div><nav class="navbar navbar-default"><div class="container fluid"><a class="navbar-brand">{{pageTitle}}</a><ul class="nav navbar-nav navbar-right"><li><a routerLink="/welcome">Home</a></li><li><a routerLink="/product">Product</a></li></ul></div></nav><div class="container"><router-outlet></router-outlet><div></div>',
// templateUrl : './app.component.html',
providers : [ProductService]
})

export class FirstAppComponent {
  pageTitle:string = "Welcome to Angular js";
}