import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-create',
  templateUrl: './orderline-create.component.html',
  styleUrls: ['./orderline-create.component.css']
})
export class OrderlineCreateComponent implements OnInit {

  orderline: Orderline = new Orderline();


  constructor(
    private service: OrderlineService,
    private router: Router) { }

  save(): void {
    this.service.create(this.orderline).subscribe({
      next: () => {
        console.debug("Orderline added");
        this.router.navigateByUrl("/orderline/list");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
