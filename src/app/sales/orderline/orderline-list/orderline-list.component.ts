import { Component, OnInit } from '@angular/core';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-list',
  templateUrl: './orderline-list.component.html',
  styleUrls: ['./orderline-list.component.css']
})
export class OrderlineListComponent implements OnInit {

  orderlines: Orderline[] = [];

  constructor(private olService: OrderlineService) { }

  ngOnInit(): void {
    this.olService.getOrderlines().subscribe({
      next: (res) => {
        this.orderlines = res;
        console.debug("Customers:", res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
