import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-edit',
  templateUrl: './orderline-edit.component.html',
  styleUrls: ['./orderline-edit.component.css']
})
export class OrderlineEditComponent implements OnInit {

  orderline!: Orderline;

  constructor(
    private service: OrderlineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.service.update(this.orderline).subscribe({
      next: () => {
        console.debug("Orderline Updated!")
        this.router.navigateByUrl("/orderline/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.service.get(id).subscribe({
      next: (res) => {
        console.debug("Orderline:", res)
        this.orderline = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
