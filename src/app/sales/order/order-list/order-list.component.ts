import { Component, OnInit } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders!: Order[];

  constructor(private oService: OrderService) { }

  ngOnInit(): void {
    this.oService.list().subscribe({
      next: (res) => {
        this.orders = res;
        console.debug("Orders:", res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
