import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-detail',
  templateUrl: './orderline-detail.component.html',
  styleUrls: ['./orderline-detail.component.css']
})
export class OrderlineDetailComponent implements OnInit {

  orderline!: Orderline;
  showVerifyButton: boolean = false;

  constructor(
    private olService: OrderlineService,
    private route: ActivatedRoute,
    private router: Router) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyRemove() {
    this.showVerifyButton = false;
    this.olService.remove(this.orderline.id).subscribe({
      next: () => {
        console.debug("Orderline removed!");
        this.router.navigateByUrl("/orderline/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.olService.get(id).subscribe({
      next: (res) => {
        this.orderline = res;
        console.debug("Orderline:", res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
