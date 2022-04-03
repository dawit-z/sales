import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Customers", "/customer/list"),
    new Menu("Orders", "/order/list"),
    new Menu("Orderlines", "/orderline/list"),
    new Menu("About", "/about")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
