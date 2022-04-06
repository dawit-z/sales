import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'customerSearch'
})
export class CustomerSearchPipe implements PipeTransform {

  transform(customers: Customer[], search: string = ""): Customer[] {
    if (search === "") {
      return customers;
    }
    let result: Customer[] = [];
    search = search.toLowerCase();
    for (let c of customers) {
      if (c.name.toLowerCase().includes(search) ||
        c.sales.toString().includes(search)) {
        result.push(c);
      }
    }
    return result;
  }
}
