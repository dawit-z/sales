import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CustomerCreateComponent } from './sales/customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './sales/customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './sales/customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './sales/customer/customer-list/customer-list.component';
import { OrderCreateComponent } from './sales/order/order-create/order-create.component';
import { OrderDetailComponent } from './sales/order/order-detail/order-detail.component';
import { OrderEditComponent } from './sales/order/order-edit/order-edit.component';
import { OrderListComponent } from './sales/order/order-list/order-list.component';
import { OrderlineCreateComponent } from './sales/orderline/orderline-create/orderline-create.component';
import { OrderlineDetailComponent } from './sales/orderline/orderline-detail/orderline-detail.component';
import { OrderlineEditComponent } from './sales/orderline/orderline-edit/orderline-edit.component';
import { OrderlineListComponent } from './sales/orderline/orderline-list/orderline-list.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "customer/list", component: CustomerListComponent },
  { path: "customer/create", component: CustomerCreateComponent },
  { path: "customer/detail/:id", component: CustomerDetailComponent },
  { path: "customer/edit/:id", component: CustomerEditComponent },

  { path: "order/list", component: OrderListComponent },
  { path: "order/create", component: OrderCreateComponent },
  { path: "order/detail/:id", component: OrderDetailComponent },
  { path: "order/edit/:id", component: OrderEditComponent },

  { path: "orderline/list", component: OrderlineListComponent },
  { path: "orderline/create", component: OrderlineCreateComponent },
  { path: "orderline/detail/:id", component: OrderlineDetailComponent },
  { path: "orderline/edit/:id", component: OrderlineEditComponent },

  { path: "**", component: WildcardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
