import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  readonly customerUrl: string = "http://localhost:50020/api/customers/";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.customerUrl + `${id}`);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer);
  }

  update(customer: Customer): Observable<any> {
    return this.http.put<any>(`${this.customerUrl}/${customer.id}`, customer);
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`this.customerUrl/${id}`);
  }
}
