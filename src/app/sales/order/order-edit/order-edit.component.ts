import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customer/customer.class';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { CustomerService } from '../../customer/customer.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order!: Order;
  customers!: Customer[]

  constructor(
    private cService: CustomerService,
    private oService: OrderService,
    private router: Router,
    private route: ActivatedRoute) { }

  save(): void {
    this.oService.update(this.order).subscribe({
      next: () => {
        console.debug("Order Updated!")
        this.router.navigateByUrl("/order/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  ngOnInit(): void {
    this.cService.getCustomers().subscribe({
      next: (res) => {
        console.debug("Customers:", res);
        this.customers = res;
      },
      error: (err) => { console.error(err); }
    });
    let id = +this.route.snapshot.params["id"];
    this.oService.get(id).subscribe({
      next: (res) => {
        console.debug("Order:", res)
        this.order = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
