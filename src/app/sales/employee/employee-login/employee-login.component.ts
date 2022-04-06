import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  login: string = "";
  password: string = "";

  constructor(
    private eService: EmployeeService
  ) { }

  submit() {
    this.eService.login(this.login, this.password).subscribe({
      next: (res) => {
        console.log("Success!");
      },
      error: (err) => {
        console.error("Login failed!")
      }
    })
  }

  ngOnInit(): void {
  }

}
