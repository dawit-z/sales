import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers: any;

  constructor(private cService: CustomerService,
    private router: Router) { }

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

  public update(customerId: number) {
    this.router.navigate([`/customer/edit/${customerId}`]);
  }

}
