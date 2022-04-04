import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private service: CustomerService) { }

  @Input() customer: any;
  id: number = 0;
  name: string = "";
  active: boolean = true;
  stateCode: string = "";
  sales: number = 0;

  ngOnInit(): void {
    this.id = this.customer.id;
    this.name = this.customer.name;
    this.active = this.customer.active;
    this.stateCode = this.customer.stateCode;
    this.sales = this.customer.sales;
  }

  addCustomer() {
    let customer = {
      id: this.id,
      name: this.name,
      active: this.active,
      stateCode: this.stateCode,
      sales: this.sales
    }
    this.service.create(customer).subscribe((res) => {
      let closeModal = document.getElementById("closeModal");
      if (closeModal) {
        closeModal.click();
      }

      let showSuccess = document.getElementById("add-success-alert");
      if (showSuccess) {
        showSuccess.style.display = "block";
      }
      setTimeout(() => {
        if (showSuccess) {
          showSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
}


