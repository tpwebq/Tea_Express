import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsS1Component } from './products-s1/products-s1.component';
import { ProductsS2Component } from './products-s2/products-s2.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsS1Component,
    ProductsS2Component,
    ProductsFiltersComponent,
    ProductsListComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
