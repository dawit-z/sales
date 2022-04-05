import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Order } from '../order.class';
import { Customer } from '../../customer/customer.class';
import { CustomerService } from '../../customer/customer.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  order: Order = new Order();
  customers!: Customer[];

  constructor(
    private oService: OrderService,
    private router: Router,
    private cService: CustomerService) { }

  ngOnInit(): void {
    this.cService.getCustomers().subscribe({
      next: (res) => {
        console.debug("Customers:", res);
        this.customers = res;
      }
    });
  }

  save(): void {
    this.oService.create(this.order).subscribe({
      next: () => {
        console.debug("Order added");
        this.router.navigateByUrl("/order/list");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
