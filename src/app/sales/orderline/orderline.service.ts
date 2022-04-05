import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orderline } from './orderline.class';

@Injectable({
  providedIn: 'root'
})

export class OrderlineService {

  public customers: any;

  orderlineUrl: string = "http://localhost:50020/api/orderlines/";

  constructor(private http: HttpClient) { }

  getOrderlines(): Observable<Orderline[]> {
    return this.http.get<Orderline[]>(this.orderlineUrl);
  }

  get(id: number): Observable<Orderline> {
    return this.http.get<Orderline>(this.orderlineUrl + `${id}`);
  }

  create(orderline: Orderline): Observable<Orderline> {
    return this.http.post<Orderline>(this.orderlineUrl, orderline);
  }

  update(orderline: Orderline): Observable<any> {
    return this.http.put<any>(`${this.orderlineUrl}${orderline.id}`, orderline);
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(this.orderlineUrl + `${id}`);
  }


}
