import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.class';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];

  constructor(
    private cService: CustomerService,
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

  modalTitle: string = "";
  activateCreateComponent: boolean = false;
  customer: any;


  modalAdd() {
    this.customer = {
      id: 0,
      name: "",
      active: true,
      stateCode: "",
      sales: 0
    }
    this.modalTitle = "Add Customer";
    this.activateCreateComponent = true;
  }

  modalUpdate() {
    this.customer = {
      name: "",
      active: true,
      stateCode: "",
      sales: 0
    }
    this.modalTitle = "Update Customer";
    this.activateCreateComponent = true;
  }



  closeModal() {
    this.activateCreateComponent = false;
  }

  public update(customerId: number) {
    this.router.navigate([`/customer/edit/${customerId}`]);
  }
}
