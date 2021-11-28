import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './components/products-list.component';
import { ProductsListService } from "./components/products-list.service";


@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule
  ],
  providers: [
    ProductsListService
  ]
})
export class ProductsListModule { }
