import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products-list/products-list.module').then((mod) => mod.ProductsListModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then((mod) => mod.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
