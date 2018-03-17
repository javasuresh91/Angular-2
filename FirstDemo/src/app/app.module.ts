import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { FirstAppComponent } from './app.component';
import { ProductListComponent } from './component/product-list';
import { CustomPipes } from './share/convert-space-to-pipe';
import { StarComponents } from './component/star-component';
import { ProductListService } from './component/product-list-service';

import { ProductListHTTP } from './component/product-list-http';
import { ProductDetailInfoComponent } from './component/product-detail-info.component';
import { WelcomeComponent } from './home/Welcome-Component';
import { ProductGuardServiceService } from './product/product-guard-service.service'


@NgModule({
  declarations: [
    FirstAppComponent,
    ProductListComponent,
    CustomPipes,
    StarComponents,
    ProductDetailInfoComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id', canActivate: [ProductGuardServiceService], component: ProductDetailInfoComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [ProductGuardServiceService],
  bootstrap: [FirstAppComponent]
})
export class AppModule { }
