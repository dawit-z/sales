import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private cService: CustomerService) { }

  ngOnInit(): void {
    this.cService.getCustomers().subscribe({
      next: (res) => {
        this.customers = res;
        console.debug("Customers:", res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
