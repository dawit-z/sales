import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderUrl: string = "http://localhost:50020/api/orders/"

  constructor(private http: HttpClient) { }

  list(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  get(id: number): Observable<Order> {
    return this.http.get<Order>(this.orderUrl + `${id}`);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order);
  }

  update(order: Order): Observable<any> {
    return this.http.put<any>(`${this.orderUrl}${order.id}`, order);
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(this.orderUrl + `${id}`);
  }
}
